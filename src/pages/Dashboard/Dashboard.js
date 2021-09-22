import React, { useState } from "react";
import { v4 as generateId } from "uuid";

import TaskInput from "../../components/TaskInput/TaskInput";
import TaskList from "../../components/TaskList/TaskList";
import classes from "./Dashboard.module.css";
const PH = [
  {
    id: generateId(),
    value: "task1",
  },
  {
    id: generateId(),
    value: "task2",
  },
  {
    id: generateId(),
    value: "task3",
  },
];
const Dashboard = () => {
  const [taskList, setTaskList] = useState(PH);

  const handleAdd = (value) => {
    const newTask = {
      id: generateId(),
      value,
    };

    setTaskList([...taskList, newTask]);
  };

  return (
    <div className={classes.wrapper}>
      {
        <>
          <TaskInput handleAddProp={handleAdd} />
          <TaskList taskListProp={taskList} />
        </>
      }
    </div>
  );
};

export default Dashboard;
