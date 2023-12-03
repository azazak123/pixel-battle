namespace backend.Controllers.RequestTypes;

public class CreateUserRequest
{
    public string? Email { get; set; }
    public string? Username { get; set; }
    public string? Password { get; set; }
}
