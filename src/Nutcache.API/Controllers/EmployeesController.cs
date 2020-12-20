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

        [HttpPut]
        public ActionResult Update(EmployeeVm employeeVm)
        {
            try
            {
                var updatedEmployee = _context.Employee.Find(employeeVm.Id);
                updatedEmployee = employeeVm.ToModel();
                updatedEmployee.Id = employeeVm.Id; // TODO Adjust
                _context.SaveChanges();
                return Ok(updatedEmployee);
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
