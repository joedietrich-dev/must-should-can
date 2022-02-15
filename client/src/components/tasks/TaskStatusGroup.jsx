import StyledButton from "../common/StyledButton";
import Task from "./Task";

function TaskStatusGroup({ tasks, status, isEditing, onAddTask, onDeleteTask, onEditTask }) {
  const filterTasks = (status) => tasks.filter((task) => task.status.name === status);
  const handleAddClick = () => {
    onAddTask(status);
  };

  return (
    <div>
      <h2>{status}</h2>
      {filterTasks(status).map((task) => (
        <Task key={task.id} task={task} isEditing={isEditing} onDeleteTask={onDeleteTask} onEditTask={onEditTask} />
      ))}
      <StyledButton onClick={handleAddClick}>Add {status}</StyledButton>
    </div>
  );
}

export default TaskStatusGroup;
