using Microsoft.AspNetCore.Mvc;
using backend.Controllers.RequestTypes;
using backend.Controllers.ResponseTypes;
using backend.Models;
using backend.Services.PasswordHasher;

namespace backend.Controllers;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly PostgresContext _context;
    private readonly IPasswordHasher _hasher;

    public UserController(PostgresContext context, IPasswordHasher hasher)
    {
        _context = context;
        _hasher = hasher;
    }

    [HttpPost]
    public ActionResult<ResultResponse<UserResponse>> Create(CreateUserRequest newUser)
    {
        if (newUser.Email == null || newUser.Password == null || newUser.Username == null)
            return BadRequest(new ResultResponse<UserResponse> { Result = false });

        var isUserExist = _context.Users.Where(user => newUser.Email == user.Email).Count() >= 1;

        if (isUserExist)
            return BadRequest(new ResultResponse<UserResponse> { Result = true });

        var (passwordHash, salt) = _hasher.CreateHashedPasword(newUser.Password);

        var user = new User
        {
            Email = newUser.Email,
            PasswordHash = passwordHash,
            PasswordSalt = salt,
            Username = newUser.Username
        };

        _context.Users.Add(user);
        _context.SaveChanges();

        return Created(
            null as string,
            new ResultResponse<UserResponse> { Result = true, Value = new UserResponse(user) }
        );
    }
}
