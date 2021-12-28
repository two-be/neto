using Microsoft.EntityFrameworkCore;

namespace Neto.Data;

public static class DbInitializer
{
    public static void Initialize(AppDbContext context)
    {
        context.Database.Migrate();
    }
}