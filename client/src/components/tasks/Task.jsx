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
  const handleCompleteChange = (e) => {
    if (e.target.checked) {
      onEditTask({ id: task.id, completed_date: new Date().toUTCString() });
    } else {
      onEditTask({ id: task.id, completed_date: null });
    }
  };
  return (
    <div>
      <input type="checkbox" onChange={handleCompleteChange} checked={isComplete} />
      <input type="text" defaultValue={task.description} onBlur={handleDescriptionBlur} />
      <button onClick={handleDeleteTask}>X</button>
    </div>
  );
}

export default Task;
