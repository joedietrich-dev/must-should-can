import { useEffect, useState } from "react";
import TaskStatusGroup from "./TaskStatusGroup";

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
          <TaskStatusGroup tasks={tasks} status={"Must"} />
          <TaskStatusGroup tasks={tasks} status={"Should"} />
          <TaskStatusGroup tasks={tasks} status={"Can"} />
        </div>
      )}
    </>
  );
}

export default TaskList;
