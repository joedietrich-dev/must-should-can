import { useEffect, useState } from "react";
import { STATUS } from "./statuses";
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

  async function handleAddTask(status) {
    const res = await fetch("/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status_id: STATUS[status],
        description: "",
      }),
    });
    const task = await res.json();
    if (task) {
      setTasks([...tasks, task]);
    }
  }
  async function handleEditTask(editedTask) {
    const res = await fetch(`/tasks/${editedTask.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedTask),
    });
    const task = await res.json();
    if (task) {
      const newTasks = tasks.map((t) => {
        if (t.id === task.id) {
          return {
            ...t,
            ...task,
          };
        } else {
          return t;
        }
      });
      setTasks(newTasks);
    }
  }
  async function handleDeleteTask(deletedTask) {
    const res = await fetch(`/tasks/${deletedTask.id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      const newTasks = tasks.filter((task) => task.id !== deletedTask.id);
      setTasks(newTasks);
    }
  }
  async function handleResetStatuses() {
    const res = await fetch(`/tasks/status_resets/`, {
      method: "POST",
    });
    if (res.ok) {
      const newTasks = await res.json();
      setTasks(newTasks);
    }
  }

  const orderedTasks = [...tasks].sort((a, b) => a.id - b.id).sort((a, b) => a.created_at - b.created_at);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          {console.log(orderedTasks)}
          <button onClick={handleResetStatuses}>Reset</button>
          <TaskStatusGroup
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            onEditTask={handleEditTask}
            tasks={orderedTasks}
            status={"Must"}
          />
          <TaskStatusGroup
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            onEditTask={handleEditTask}
            tasks={orderedTasks}
            status={"Should"}
          />
          <TaskStatusGroup
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            onEditTask={handleEditTask}
            tasks={orderedTasks}
            status={"Can"}
          />
        </div>
      )}
    </>
  );
}

export default TaskList;
