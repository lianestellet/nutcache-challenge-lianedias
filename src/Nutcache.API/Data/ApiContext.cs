using System;
using Microsoft.EntityFrameworkCore;
    
namespace Nutcache.API.Data
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options)
        {
            
        }

        public DbSet<Employee> Employee { get; set; }

    }
}