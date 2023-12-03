namespace backend.Controllers.ResponseTypes;

using backend.Models;

public class UserResponse
{
    public UserResponse(User user)
    {
        Username = user.Username;
        Email = user.Email;
        Id = user.Id;
    }

    public string Username { get; set; }
    public string Email { get; set; }
    public int Id { get; set; }
}
