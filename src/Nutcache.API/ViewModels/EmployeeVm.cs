using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nutcache.API.ViewModels
{
    public class EmployeeVm
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string CPF { get; set; }
        public DateTime StartDate { get; set; }
        public bool IsActive { get; set; }
        public string Team { get; set; }

        public Employee ToModel()
        {
            return new Employee(Name, BirthDate, Gender, Email, CPF, StartDate, Team);
        }
    }
}
