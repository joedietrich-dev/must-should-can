import { STATUS } from "./statuses";
import Task from "./Task";

function TaskStatusGroup({ tasks, status }) {
  const filterTasks = (status) => tasks.filter((task) => task.status.name === status);
  const handleAddClick = (e) => {
    fetch("/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status_id: STATUS[status],
        description: "aaa",
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    <div>
      <h2>{status}</h2>
      {filterTasks(status).map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <button onClick={handleAddClick}>Add {status}</button>
    </div>
  );
}

export default TaskStatusGroup;
