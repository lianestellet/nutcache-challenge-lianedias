using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Nutcache.API
{
    public class Employee
    {
        public Employee(){}        

        public Employee(string name, DateTime birthDate, string gender, 
            string email, string cpf, DateTime startDate, string team)
        {
            this.Name = name;
            this.BirthDate = birthDate;
            this.Gender = gender;
            this.Email = email;
            this.CPF = cpf;
            this.StartDate = startDate;
            this.Team = team;
        }

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int? Id { get; set; }
        public string Name { get; set; }
        public DateTime BirthDate { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public string CPF { get; set; }
        public DateTime StartDate { get; set; }
        public string Team { get; set; }
    }
}