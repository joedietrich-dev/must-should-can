function Task({ task }) {
  const isComplete = task.completed_date ? true : false;
  return (
    <div>
      <input type="checkbox" value={isComplete} />
      <input type="text" value={task.description} />
      <button>X</button>
    </div>
  );
}

export default Task;
