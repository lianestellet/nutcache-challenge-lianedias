import React from "react";
import { IEmployee } from "../../interfaces/employee";
import "./EmployeeList.css";

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
   
    <div className="container">
    <div className="employee__grid">   
      {employees.map(employee => (           
        <div key={employee.id} className="employee__grid__item">          
          <div>
            <div>{employee.name}</div>
            <div>{employee.startDate}</div>
            <div>
              <div>{employee.email}</div>
              <div>{employee.gender}</div>
            </div>
            <div>              
              <label>{employee.name}
                <input type="button" value="Edit"
                  onClick={(e) => selectEmployee(employee.id)}
                />
              </label>   
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>   
  );
};