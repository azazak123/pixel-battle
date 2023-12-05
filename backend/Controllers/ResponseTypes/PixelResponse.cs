namespace backend.Controllers.ResponseTypes;

using backend.Models;

public class PixelResponse
{
    public PixelResponse(Pixel pixel)
    {
        Id = pixel.Id;
        X = pixel.X;
        Y = pixel.Y;
        Color = pixel.Color;
        AuthorId = pixel.AuthorId;
        CreationTime = pixel.CreationTime;
    }

    public int Id { get; set; }
    public int X { get; set; }
    public int Y { get; set; }
    public byte[] Color { get; set; }
    public int AuthorId { get; set; }
    public DateTime CreationTime { get; set; }
}
