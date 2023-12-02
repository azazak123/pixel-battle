using System;
using System.Collections.Generic;

namespace backend.Models;

public partial class Pixel
{
    public int Id { get; set; }

    public int X { get; set; }

    public int Y { get; set; }

    public byte[] Color { get; set; } = null!;

    public int AuthorId { get; set; }

    public DateTime CreationTime { get; set; }

    public virtual User Author { get; set; } = null!;
}
