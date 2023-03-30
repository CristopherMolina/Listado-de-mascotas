using Microsoft.EntityFrameworkCore;

namespace Backend_CRUDMascotas.Models
{
    public class AplicationDbContext: DbContext
    {
        public AplicationDbContext(DbContextOptions<AplicationDbContext> options): base(options) 
        {
            
        }

        public DbSet<Mascota> Mascotas { get; set; }
    }
}
