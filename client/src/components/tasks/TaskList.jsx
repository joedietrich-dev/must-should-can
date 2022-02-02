import { useEffect, useState } from "react";
import StatusGroup from "./StatusGroup";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          <button>Reset</button>
          <StatusGroup tasks={tasks} status={"Must"} />
          <StatusGroup tasks={tasks} status={"Should"} />
          <StatusGroup tasks={tasks} status={"Can"} />
        </div>
      )}
    </>
  );
}

export default TaskList;
