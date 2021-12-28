using Microsoft.EntityFrameworkCore;
using Neto.Models;

namespace Neto.Data;

public class AppDbContext : DbContext
{
    public DbSet<NoteInfo> Notes => Set<NoteInfo>();

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
}