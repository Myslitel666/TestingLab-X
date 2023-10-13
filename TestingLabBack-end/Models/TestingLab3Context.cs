using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace TestingLab3.Models;

public partial class TestingLab3Context : DbContext
{
    public TestingLab3Context()
    {
    }

    public TestingLab3Context(DbContextOptions<TestingLab3Context> options)
        : base(options)
    {
    }

    public virtual DbSet<DescriptionLab> DescriptionLabs { get; set; }

    public virtual DbSet<LabList> LabLists { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.\\SQLEXPRESS; Database=TestingLab3; Trusted_Connection=True; TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<DescriptionLab>(entity =>
        {
            entity.HasKey(e => e.DescriptionLabsId);

            entity.Property(e => e.DescriptionLabsId).HasColumnName("DescriptionLabsID");
            entity.Property(e => e.ImageUrl)
                .HasMaxLength(256)
                .IsUnicode(false);
            entity.Property(e => e.LabDescription)
                .HasMaxLength(256)
                .IsUnicode(false);
            entity.Property(e => e.LabName)
                .HasMaxLength(256)
                .IsUnicode(false);
        });

        modelBuilder.Entity<LabList>(entity =>
        {
            entity.ToTable("LabList");

            entity.Property(e => e.LabListId).HasColumnName("LabListID");
            entity.Property(e => e.LabIcon)
                .HasMaxLength(256)
                .IsUnicode(false);
            entity.Property(e => e.LabName)
                .HasMaxLength(256)
                .IsUnicode(false);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
