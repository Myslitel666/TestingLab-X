using System;
using System.Collections.Generic;

namespace TestingLabX.Models;

public partial class LabList
{
    public int LabListId { get; set; }

    public string? LabName { get; set; }

    public string? LabIcon { get; set; }

    public string? LabLink { get; set; }
}
