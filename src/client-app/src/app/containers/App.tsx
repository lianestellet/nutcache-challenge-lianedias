import React, { useState, Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import { IActivity } from "../models/activity";
import { EmployeeList } from "../components/employee/EmployeeList";

const App = () => {

  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null);
  const [editMode, setEditMode] = useState(false);

  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  }

  return (
    <Fragment>
      <NavBar openCreateForm={handleOpenCreateForm} />
      <Container style={{ marginTop: "7em" }}>
        <EmployeeList />
      </Container>
    </Fragment>
  );
};

export default App;
