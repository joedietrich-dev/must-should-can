import { useEffect, useState } from "react";
import { STATUS } from "../common/statuses";
import StyledButton from "../common/StyledButton";
import TaskStatusGroup from "./TaskStatusGroup";

const statuses = ["Must", "Should", "Can"];

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  async function fetchTasks() {
    const res = await fetch("/api/tasks/active");
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
    const res = await fetch("/api/tasks", {
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
    const res = await fetch(`/api/tasks/${editedTask.id}`, {
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
    const res = await fetch(`/api/tasks/${deletedTask.id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      const newTasks = tasks.filter((task) => task.id !== deletedTask.id);
      setTasks(newTasks);
    }
  }
  async function handleResetStatuses() {
    const res = await fetch(`/api/tasks/status_resets/`, {
      method: "POST",
    });
    if (res.ok) {
      const newTasks = await res.json();
      setIsEditing(true);
      setTasks(newTasks);
    }
  }
  function handleToggleEditStatuses() {
    setIsEditing((s) => !s);
  }

  const orderedTasks = [...tasks].sort((a, b) => a.id - b.id).sort((a, b) => a.created_at - b.created_at);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          {isEditing ? (
            <div>
              <StyledButton onClick={handleToggleEditStatuses}>Finish</StyledButton>
            </div>
          ) : (
            <div>
              <StyledButton onClick={handleToggleEditStatuses}>Edit</StyledButton>
              <StyledButton onClick={handleResetStatuses}>Reset</StyledButton>
            </div>
          )}
          {statuses.map((status) => (
            <TaskStatusGroup
              key={status}
              onAddTask={handleAddTask}
              onDeleteTask={handleDeleteTask}
              onEditTask={handleEditTask}
              tasks={orderedTasks}
              status={status}
              isEditing={isEditing}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default TaskList;
