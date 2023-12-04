namespace backend.Controllers.RequestTypes;

public class CreatePixelRequest
{
    public int? X { get; set; }
    public int? Y { get; set; }
    public byte[]? Color { get; set; }
}
