import Task from "./Task";

function StatusGroup({ tasks, status }) {
  const filterTasks = (status) => tasks.filter((task) => task.status.name === status);

  return (
    <div>
      <h2>{status}</h2>
      {filterTasks(status).map((task) => (
        <Task key={task.id} task={task} />
      ))}
      <button>Add {status}</button>
    </div>
  );
}

export default StatusGroup;
