using Microsoft.EntityFrameworkCore;

namespace CityGame.Models
{
    public class CityGameContext : DbContext
    {
        public DbSet<Category> Category { get; set; }
        public DbSet<Commands> Commands { get; set; }
        public DbSet<Commands> Users { get; set; }
        public DbSet<Commands> Games { get; set; }
        public DbSet<Commands> Tasks { get; set; }
        public DbSet<Commands> EventJournal { get; set; }
        public DbSet<Commands> Participants { get; set; }
        public CityGameContext(DbContextOptions<CityGameContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
    }
}