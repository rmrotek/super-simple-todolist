import TaskItem from "../TaskItem/TaskItem";

const TaskList = ({ taskListProp }) => {
  return (
    <>
      <div>
        {taskListProp.map((task) => (
          <TaskItem key={task.id} value={task.value} />
        ))}
      </div>
    </>
  );
};

export default TaskList;
