import { STATUS } from "./statuses";

function Task({ task, onDeleteTask, onEditTask }) {
  const isComplete = task.completed_date ? true : false;
  const handleDeleteTask = () => {
    onDeleteTask(task);
  };
  const handleDescriptionBlur = (e) => {
    if (e.target.value !== task.description) {
      onEditTask({ id: task.id, description: e.target.value });
    }
  };
  const handleCompletedChange = (e) => {
    if (e.target.checked) {
      onEditTask({ id: task.id, completed_date: new Date().toUTCString() });
    } else {
      onEditTask({ id: task.id, completed_date: null });
    }
  };
  const handleStatusClick = (e) => {
    const status = e.target.name;
    if (status !== task.status) {
      onEditTask({ id: task.id, status_id: STATUS[status] });
    }
  };
  return (
    <div>
      <input type="checkbox" onChange={handleCompletedChange} checked={isComplete} />
      <input type="text" defaultValue={task.description} onBlur={handleDescriptionBlur} />
      <button onClick={handleDeleteTask}>X</button>
      <button onClick={handleStatusClick} name="Must">
        M
      </button>
      <button onClick={handleStatusClick} name="Should">
        S
      </button>
      <button onClick={handleStatusClick} name="Must">
        C
      </button>
    </div>
  );
}

export default Task;
