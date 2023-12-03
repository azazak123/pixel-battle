namespace backend.Services.PasswordHasher;

public interface IPasswordHasher
{
    (byte[], byte[]) HashPasword(string password);
}
