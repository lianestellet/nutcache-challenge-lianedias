import React, { Fragment } from "react";
import { Row } from 'antd';
import Employees from './Employees';
import 'antd/dist/antd.css';

const App = () => {

  return (
    <Fragment>      
      <Row justify='center'>
        <Employees />
      </Row>
    </Fragment>
  );
};

export default App;
