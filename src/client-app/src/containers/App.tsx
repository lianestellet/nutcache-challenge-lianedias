import React, { Fragment } from "react";
import { EmployeeList } from "../components/employee/List";

const App = () => {

  return (
    <Fragment>      
      <div style={{ marginTop: "7em" }}>
        <EmployeeList />
      </div>
    </Fragment>
  );
};

export default App;
