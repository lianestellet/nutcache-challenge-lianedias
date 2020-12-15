import React, { Fragment, useState } from "react";
import { Modal, Button, Form, Input, Select, DatePicker, InputNumber, Row } from 'antd';
import moment from 'moment';
import Employee from "../../models/Employee";
import IEmployee from "../../models/IEmployee";


const EmployeeCreate = () => {  
  const [isModalVisible, setIsModalVisible] = useState(false);  
  const [employeeForm, setEmployeeForm] = useState<Employee>();
  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleSubmit = (newEmployee: Employee) => {
    debugger;
    console.log('Received values of form: ', newEmployee);
  };

  const handleCancel = () => {    
    setEmployeeForm(new Employee({} as IEmployee));
    setIsModalVisible(false);
  };

  return (
    <Fragment>
      <Row justify="end">
        <Button type="primary" onClick={showModal}>
          Create Employee
        </Button>
      </Row>
      <Modal title="Create Employee" visible={isModalVisible} onCancel={handleCancel} footer={[]}>
        <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        onFinish={handleSubmit}
        scrollToFirstError  
        
        
      >
          <Form.Item label="Name" name="name" rules={[
          {
            required: true,
            message: 'Name field is required!',
          },
        ]}>
            <Input />
          </Form.Item>

          <Form.Item label="BirthDate" name="birthDate">
            <DatePicker />
          </Form.Item>
             
          <Form.Item label="Gender" name="gender" rules={[
            {
              required: true,
              message: 'Gender field is required!',
            },
          ]}>
            <Select>
              <Select.Option value="Male">Mobile</Select.Option>
              <Select.Option value="Female">Frontend</Select.Option>
              <Select.Option value="NonBinary">Backend</Select.Option>
              <Select.Option value="Other">Other</Select.Option>
            </Select>
          </Form.Item>
          
          <Form.Item label="E-mail" name="email" rules={[
          {
            type: 'email',
            message: 'Invalid e-mail format!',
          },
          {
            required: true,
            message: 'E-mail field is required!',
          },
        ]}>
            <Input />
          </Form.Item>

          <Form.Item label="CPF" name="cpf" rules={[              
              {
                required: true,
                pattern: new RegExp(/^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/),
                message: "Wrong CPF format!"                            
              }
            ]}>
            <Input placeholder="Ex: 999.999.999-99" />
          </Form.Item>

          <Form.Item label="StartDate" name="startDate">
            <DatePicker defaultValue={moment('2021/01', 'YYYY/MM')} format={'YYYY/MM'} picker="month" />
          </Form.Item>

          <Form.Item label="Team" name="team">
            <Select>
              <Select.Option value="Mobile">Mobile</Select.Option>
              <Select.Option value="Frontend">Frontend</Select.Option>
              <Select.Option value="Backend">Backend</Select.Option>
            </Select>
          </Form.Item>     
          
          
            <Row justify="space-between">
              <Button type="primary" onClick={handleCancel} disabled={false}>
                Cancelar
              </Button>
              <Button type="primary" htmlType="submit" disabled={false}>
                Criar
              </Button>
            </Row>
          
        </Form>
      </Modal>
    </Fragment>
  );
};

export default EmployeeCreate;
