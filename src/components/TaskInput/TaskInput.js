import { useState } from "react";

const TaskInput = ({ handleAddProp }) => {
  const [taskInputValue, setTaskInputValue] = useState("");

  const handleInput = (e) => setTaskInputValue(e.target.value);

  const handleButton = () => {
    handleAddProp(taskInputValue)
  }

  return (
    <>
      <div>
        <input value={taskInputValue} onChange={handleInput} />
        <button onClick={handleButton}>add</button>
      </div>
    </>
  );
};

export default TaskInput;
