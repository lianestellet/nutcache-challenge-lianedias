import React, { useState } from "react";
import { Table, Tag, Space, Button, Popconfirm, message } from 'antd';
import IEmployee from "../../models/IEmployee";
import { Gender } from "../../models/Enums";
import "./EmployeeList.scss";
import Employee from "../../models/Employee";
import EmployeeCreate from "./../../components/employee/EmployeeCreate";

export const EmployeeList = () => {
  
  const [removingEmployee, setRemovingEmployee] = React.useState<Employee>(new Employee({} as IEmployee));
  const [editingEmployee, setEditingEmployee] = React.useState<Employee>(new Employee({} as IEmployee));
  const [confirmLoading, setConfirmLoading] = React.useState(false);
    
  let employeesDataSource: Array<Employee> = [
    new Employee({
      id: 3,
      name: 'Britney Spears',
      gender: Gender.Female,
      email: 'madonna@gmail.com',
      birthDate: new Date(1970, 10, 10),
      startDate: new Date(2021, 14, 13),
      cpf: '643264721223',
      team: 'frontend'  
    }),    
    new Employee({
      id: 4,
      name: 'Madonna',
      gender: Gender.Female,
      email: 'madonna@gmail.com',
      birthDate: new Date(1970, 10, 10),
      startDate: new Date(2021, 14, 13),
      cpf: '643264721223',
      team: 'frontend'
    }),     
    new Employee({
      id: 5,
      name: 'Scott Pilgrim',
      gender: Gender.NonBinary,
      email: 'sp@gmail.com',
      birthDate: new Date(1970, 10, 10),
      startDate: new Date(2021, 14, 13),
      cpf: '141242425',
      team: 'backend'
    })    
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'StartDate',
      dataIndex: 'startDate',
      align: 'center' as 'center',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      align: 'center' as 'center',
      render: (g: Gender) => 
        {
          let color = '';
        if(g === Gender.Male) {
          color = 'blue';
        } else if (g === Gender.Female) {
          color = 'pink';
        } else {
          color = 'purple';
        }
        return (<Tag color={color} key={g}>
          {g.toUpperCase()}
        </Tag>)
      }
    },
    {
      title: 'Action',
      align: 'center' as 'center',
      render: (text : string, employee: Employee) => (
        <Space size="middle">  
          <Button 
            type="primary"
            onClick={() => handleUploadDialog(employee)}
          >
            Edit
          </Button>
          <Popconfirm placement="topLeft"
            title={ "Deseja remover colaborador " + employee.name + "?" }
            visible={ removingEmployee.id === employee.id}
            onConfirm={() => confirmDisableEmployee(employee)}
            onCancel={cancelDisableEmployee}
            okButtonProps={{ loading: confirmLoading }}
          >

            <Button danger
              type="primary"
              htmlType="submit"
              onClick={() => handleDisableEmployee(employee)}
            >
                Remove
            </Button>
          </Popconfirm>
        </Space>
      )
      }]
  
  
  
  const handleDisableEmployee = (employee: Employee) => {
    setRemovingEmployee(employee);
  };

  const confirmDisableEmployee = (employee: Employee): void => {
    setConfirmLoading(true);
    setTimeout(() => {
      setRemovingEmployee({} as IEmployee);
      setConfirmLoading(false);      
    }, 2000);
  };

  const cancelDisableEmployee = () => {
    setRemovingEmployee({} as IEmployee);
  };

  const handleCreateEmployee = () => {

  }

  const handleEdit = (employee: IEmployee) => {
    setEditingEmployee(employee);

  }
  
  const handleUploadDialog = (employee: IEmployee) => {
    
  };

  const handleRemoveDialog = (employee: IEmployee) => {    
    console.log('Removendo: ', employee.name);
  };

  function selectEmployee(id: number) {
    console.log(id);
  }

  return (
    <div className="employees">
      <h3>Employees</h3>
      
      <Table columns={columns} dataSource={employeesDataSource} rowKey={record => record.id} />
      <EmployeeCreate />
    </div>
  );
};