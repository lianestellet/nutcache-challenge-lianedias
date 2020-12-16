using System;
using System.Linq;

namespace Nutcache.API.Data
{
    public class ApiContextSeed
    {
        public static void SeedData(ApiContext context)
        {
            if(!context.Employee.Any()) {
                context.Employee.AddRange(new Employee
                    {
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
                        Name = "Lara Croft",
                        Email = "larcro@google.com",
                        BirthDate = new DateTime(1976, 2, 25),
                        CPF = "73876453212",
                        Gender = "Female",
                        Team = "Frontend",
                        StartDate = new DateTime(2020, 10, 10)
                    }
                );
                context.SaveChanges();
            }
        }
    }
}