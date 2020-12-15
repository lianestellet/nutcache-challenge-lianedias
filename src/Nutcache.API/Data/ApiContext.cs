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

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Employee>().HasData(
                new Employee
                {
                    Id = 1,
                    Name = "Arnold Schwarzenegger",
                    Email = "arnold@microsoft.com",
                    BirthDate = new DateTime(1976, 2, 25),
                    CPF = "09876543212",
                    Gender = "Male",
                    Team = "Frontend",
                    StartDate = new DateTime(2020, 10, 10)
                },
                new Employee
                {
                    Id = 2,
                    Name = "Lara Croft",
                    Email = "larcro@google.com",
                    BirthDate = new DateTime(1976, 2, 25),
                    CPF = "73876453212",
                    Gender = "Female",
                    Team = "Frontend",
                    StartDate = new DateTime(2020, 10, 10)
                }
            );
        }
    }
}