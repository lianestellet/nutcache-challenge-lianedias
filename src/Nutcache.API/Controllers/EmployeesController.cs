using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Nutcache.API.Data;
using Nutcache.API.ViewModels;

namespace Nutcache.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {
        private readonly ApiContext _context;

        public EmployeesController(ApiContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Employee>> Get()
        {
            try
            {
                return Ok(_context.Employee.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost]
        public ActionResult Create(EmployeeVm employeeVm)
        {
            try
            {
                var employee = employeeVm.ToModel();
                _context.Employee.Add(employee);
                _context.SaveChanges();

                return Ok(employee);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public ActionResult Update(int id, [FromBody] EmployeeVm employeeVm)
        {
            try
            {
                var updatingEmployee = _context.Employee.Find(id);
                if (updatingEmployee == null)
                {
                    return BadRequest("Employee not found");
                }

                updatingEmployee.Name = employeeVm.Name;
                updatingEmployee.BirthDate = employeeVm.BirthDate;
                updatingEmployee.StartDate = employeeVm.StartDate;
                updatingEmployee.Gender = employeeVm.Gender;
                updatingEmployee.Email = employeeVm.Email;
                updatingEmployee.CPF = employeeVm.CPF;
                updatingEmployee.Team = employeeVm.Team;

                _context.SaveChanges();
                return Ok(updatingEmployee);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpDelete, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int? employeeId)
        {
            try
            {
                var deletedEmployee = _context.Employee.Find(employeeId);
                _context.Remove(deletedEmployee);
                _context.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
