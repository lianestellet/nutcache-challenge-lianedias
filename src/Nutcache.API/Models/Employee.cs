using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Nutcache.API
{
    public class Employee
    {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
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