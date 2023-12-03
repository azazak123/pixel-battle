using System.Security.Cryptography;
using System.Text;

namespace backend.Services.PasswordHasher;

public class PasswordHasherSHA512 : IPasswordHasher
{
    const int keySize = 64;
    const int iterations = 350000;
    HashAlgorithmName hashAlgorithm = HashAlgorithmName.SHA512;

    public (byte[], byte[]) CreateHashedPasword(string password)
    {
        var salt = RandomNumberGenerator.GetBytes(keySize);
        var hash = Rfc2898DeriveBytes.Pbkdf2(
            Encoding.UTF8.GetBytes(password),
            salt,
            iterations,
            hashAlgorithm,
            keySize
        );
        return (hash, salt);
    }

    public byte[] HashPasword(string password, byte[] salt)
    {
        var hash = Rfc2898DeriveBytes.Pbkdf2(
            Encoding.UTF8.GetBytes(password),
            salt,
            iterations,
            hashAlgorithm,
            keySize
        );
        return hash;
    }
}
