import React, { SyntheticEvent } from "react";
import { Item, Button, Label, Segment } from "semantic-ui-react";
import { IEmployee } from "../../interfaces/employee";
import "./employee.css";

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
   
    <Segment clearing>
    <Item.Group divided>   
      {employees.map(employee => (           
        <Item key={employee.id} className="employee--list-item">          
          <Item.Content>
            <Item.Header as='a'>{employee.name}</Item.Header>
            <Item.Meta>{employee.startDate}</Item.Meta>
            <Item.Description>
              <div>{employee.email}</div>
              <div>{employee.gender}</div>
            </Item.Description>
            <Item.Extra>
              <Button onClick={(e)=>selectEmployee(employee.id)} floated='right' content='View' color='blue'></Button>
              <Label basic content={employee.name}/>               
            </Item.Extra>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </Segment>   
  );
};