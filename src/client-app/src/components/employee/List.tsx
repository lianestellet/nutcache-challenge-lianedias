import React from "react";
import { IEmployee } from "../../interfaces/employee";
import "./List.scss";

let employees = [ 
   {
    id: 3,
    name: 'john cena',
    gender: 'male',
    email: 'jc@gmail.com',
    birthDate: '10/10/1970',
    startDate: '12/12/2020',
    cpf: '1284025849',
    team: 'backend'
  } as IEmployee,
  {
    id: 4,
    name: 'Madonna',
    gender: 'female',
    email: 'madonna@gmail.com',
    birthDate: '10/10/1970',
    startDate: '12/12/2020',
    cpf: '643264721223',
    team: 'frontend'
  } as IEmployee,
  {
    id: 5,
    name: 'Scott Pilgrim',
    gender: 'male',
    email: 'sp@gmail.com',
    birthDate: '10/10/1970',
    startDate: '12/12/2020',
    cpf: '141242425',
    team: 'backend'
  } as IEmployee
];

export const EmployeeList = () => {


  function selectEmployee(id: number) {
    console.log(id);
  }

  return (
      <div className="employees">
        <h3>Employees</h3>
        <div className="employees__header">  
            <div>Name</div>
            <div>StartDate</div>
            <div>Email</div>
            <div>Gender</div>
            <div>Actions</div>
        </div>
      {employees.map(employee => (           
        <div key={employee.id} className="employee">
            <div className="employee__prop">{employee.name}</div>
            <div className="employee__prop">{employee.startDate}</div>
            <div className="employee__prop">{employee.email}</div>
            <div className="employee__prop">{employee.gender}</div>
          <div className="employee__prop">
            
              <input className="employee__prop--button" type="button" value="Edit"
                  onClick={(e) => selectEmployee(employee.id)}
            />
            <input className="employee__prop--button" type="button" value="Disable"
                  onClick={(e) => selectEmployee(employee.id)}
                />
            </div>
        </div>
      ))}
    </div>
  );
};