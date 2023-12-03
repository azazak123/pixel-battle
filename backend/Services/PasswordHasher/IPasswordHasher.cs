namespace backend.Services.PasswordHasher;

public interface IPasswordHasher
{
    (byte[], byte[]) CreateHashedPasword(string password);
    public byte[] HashPasword(string password, byte[] salt);
}
