using System;
using System.Collections.Generic;

namespace TestingLabX.Models;

public partial class DescriptionLab
{
    public int DescriptionLabsId { get; set; }

    public string? LabName { get; set; }

    public string? LabDescription { get; set; }

    public string? ImageUrl { get; set; }

    public int? LabNumber { get; set; }

    public string? LabLink { get; set; }
}
