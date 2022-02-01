import { useEffect, useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const filterTasks = (status) => tasks.filter((task) => task.status.name === status);

  async function fetchTasks() {
    const res = await fetch("/tasks");
    if (res.ok) {
      const data = await res.json();
      setTasks(data);
      setError(null);
    } else if (res.status === 401) {
      setError("Please log in");
    } else {
      setError("Something went wrong");
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  console.log(tasks);
  return (
    <div>
      <h2>Must</h2>
      {filterTasks("Must").map((task) => (
        <p key={task.id}>{task.description}</p>
      ))}
      <h2>Should</h2>
      {filterTasks("Should").map((task) => (
        <p key={task.id}>{task.description}</p>
      ))}
      <h2>Can</h2>
      {filterTasks("Can").map((task) => (
        <p key={task.id}>{task.description}</p>
      ))}
    </div>
  );
}

export default TaskList;
