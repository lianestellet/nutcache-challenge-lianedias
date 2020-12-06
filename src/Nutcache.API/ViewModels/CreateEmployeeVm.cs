using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nutcache.API.ViewModels
{
    public class CreateEmployeeVm
    {
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string CPF { get; set; }
        public DateTime StartDate { get; set; }
        public bool IsActive { get; set; }
        public string Team { get; set; }
    }
}
