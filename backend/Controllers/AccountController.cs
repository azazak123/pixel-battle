using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Mvc;
using backend.Controllers.RequestTypes;
using backend.Controllers.ResponseTypes;
using backend.Models;
using backend.Services.PasswordHasher;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class AccountController : ControllerBase
{
    private readonly PostgresContext _context;
    private readonly IPasswordHasher _hasher;
    private readonly ILogger _logger;

    public AccountController(
        PostgresContext context,
        IPasswordHasher hasher,
        ILogger<AccountController> logger
    )
    {
        _context = context;
        _hasher = hasher;
        _logger = logger;
    }

    [HttpPost]
    public async Task<ActionResult<ResultResponse<ValueTuple>>> Login(LoginRequest account)
    {
        if (account.Email == null || account.Password == null)
            return BadRequest(new ResultResponse<ValueTuple> { Result = false });

        var potentialUser = _context
            .Users
            .Where(user => user.Email == account.Email)
            .FirstOrDefault();

        if (potentialUser == null)
            return NotFound(new ResultResponse<ValueTuple> { Result = false });

        var password = _hasher.HashPasword(account.Password, potentialUser.PasswordSalt);

        if (!potentialUser.PasswordHash.SequenceEqual(password))
            return BadRequest(new ResultResponse<ValueTuple> { Result = false });

        var user = potentialUser;

        var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Email, user.Email),
            new Claim("UserName", user.Username),
        };

        var claimsIdentity = new ClaimsIdentity(
            claims,
            CookieAuthenticationDefaults.AuthenticationScheme
        );

        var authProperties = new AuthenticationProperties();

        await HttpContext.SignInAsync(
            CookieAuthenticationDefaults.AuthenticationScheme,
            new ClaimsPrincipal(claimsIdentity),
            authProperties
        );

        _logger.LogInformation("User {0} logged in", user.Username);

        return Ok(new ResultResponse<ValueTuple> { Result = true });
    }
}
