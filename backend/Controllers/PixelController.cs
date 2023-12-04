using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using backend.Controllers.RequestTypes;
using backend.Controllers.ResponseTypes;
using backend.Models;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class PixelController : ControllerBase
{
    private readonly PostgresContext _context;
    private readonly ILogger _logger;
    private readonly TimeSpan _delay = new TimeSpan(0, 1, 0);

    public PixelController(PostgresContext context, ILogger<AccountController> logger)
    {
        _context = context;
        _logger = logger;
    }

    [HttpPost]
    [ProducesResponseType(201)]
    [ProducesResponseType(typeof(ResultResponse<ValueTuple>), 400)]
    [ProducesResponseType(typeof(ResultResponse<ValueTuple>), 404)]
    public ActionResult<ResultResponse<PixelResponse>> Create(CreatePixelRequest newPixel)
    {
        var email = HttpContext.User.FindFirstValue(ClaimTypes.Email);
        if (email == null)
            return NotFound(new ResultResponse<PixelResponse> { Result = false });

        var user = _context.Users.Where(user => user.Email == email).FirstOrDefault();

        if (user == null)
            return NotFound(new ResultResponse<Pixel> { Result = false });

        if (newPixel.Color == null || newPixel.X == null || newPixel.Y == null)
            return BadRequest(new ResultResponse<PixelResponse> { Result = false });

        if (
            _context.Pixels.Where(pixel => pixel.X == newPixel.X && pixel.Y == newPixel.Y).Count()
            >= 1
        )
            return BadRequest(new ResultResponse<PixelResponse> { Result = false });

        if (checkDelay(user))
            return BadRequest(new ResultResponse<PixelResponse> { Result = false });

        var pixel = new Pixel
        {
            X = (int)newPixel.X,
            Y = (int)newPixel.Y,
            Color = newPixel.Color,
            AuthorId = user.Id,
            CreationTime = DateTime.SpecifyKind(DateTime.Now, DateTimeKind.Utc),
        };

        _context.Pixels.Add(pixel);
        _context.SaveChanges();

        _logger.LogInformation(
            "Pixel ({0}, {1}) was created with color {2}",
            pixel.X,
            pixel.Y,
            BitConverter.ToString(pixel.Color)
        );

        return Created(
            null as string,
            new ResultResponse<PixelResponse> { Result = true, Value = new PixelResponse(pixel) }
        );
    }

    [HttpPut]
    [ProducesResponseType(200)]
    [ProducesResponseType(typeof(ResultResponse<ValueTuple>), 400)]
    [ProducesResponseType(typeof(ResultResponse<ValueTuple>), 404)]
    public ActionResult<ResultResponse<PixelResponse>> Change(CreatePixelRequest newPixel)
    {
        var email = HttpContext.User.FindFirstValue(ClaimTypes.Email);
        if (email == null)
            return BadRequest(new ResultResponse<PixelResponse> { Result = false });

        var user = _context.Users.Where(user => user.Email == email).FirstOrDefault();

        if (user == null)
            return NotFound(new ResultResponse<PixelResponse> { Result = false });

        if (newPixel.Color == null || newPixel.X == null || newPixel.Y == null)
            return BadRequest(new ResultResponse<PixelResponse> { Result = false });

        if (checkDelay(user))
            return BadRequest(new ResultResponse<PixelResponse> { Result = false });

        var pixel = _context
            .Pixels
            .Where(pixel => pixel.X == newPixel.X && pixel.Y == newPixel.Y)
            .FirstOrDefault();

        if (pixel == null)
            return NotFound(new ResultResponse<PixelResponse> { Result = false });

        pixel.Color = newPixel.Color;
        pixel.AuthorId = user.Id;
        pixel.CreationTime = DateTime.SpecifyKind(DateTime.Now, DateTimeKind.Utc);

        _context.SaveChanges();

        _logger.LogInformation(
            "Color of pixel ({0}, {1}) was changed to {2}",
            pixel.X,
            pixel.Y,
            BitConverter.ToString(pixel.Color)
        );

        return Ok(
            new ResultResponse<PixelResponse> { Result = true, Value = new PixelResponse(pixel) }
        );
    }

    bool checkDelay(User user){
        var now = DateTime.SpecifyKind(DateTime.Now, DateTimeKind.Utc);
        var lastPixelCreationTime = _context
            .Pixels
            .Where(pixel => pixel.AuthorId == user.Id)
            .Select(pixel => pixel.CreationTime)
            .OrderByDescending(time => time)
            .FirstOrDefault();

        return now - lastPixelCreationTime < _delay;
    }
}
