using System;
using System.Collections.Generic;

namespace TestingLab3.Models;

public partial class DescriptionLab
{
    public int DescriptionLabsId { get; set; }

    public string? LabName { get; set; }

    public string? LabDescription { get; set; }

    public string? ImageUrl { get; set; }

    public int? LabNumber { get; set; }
}
