import React, { Fragment } from "react";
import { Row } from 'antd';
import { EmployeeList } from "../components/employee/EmployeeList";

const Employees = () => {

  return (
    <Fragment>      
      <Row>
        <EmployeeList />
      </Row>
    </Fragment>
  );
};

export default Employees;
