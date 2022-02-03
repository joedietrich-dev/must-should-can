import Task from "./Task";

function TaskStatusGroup({ tasks, status, onAddTask, onDeleteTask, onEditTask }) {
  const filterTasks = (status) => tasks.filter((task) => task.status.name === status);
  const handleAddClick = () => {
    onAddTask(status);
  };

  return (
    <div>
      <h2>{status}</h2>
      {filterTasks(status).map((task) => (
        <Task key={task.id} task={task} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />
      ))}
      <button onClick={handleAddClick}>Add {status}</button>
    </div>
  );
}

export default TaskStatusGroup;
