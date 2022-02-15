import { useEffect, useState } from "react";
import StyledButton from "../common/StyledButton";
import Input from "../common/Input";

function ArchiveList() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchTasks() {
    const res = await fetch("/api/tasks/archived");
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

  const ArchiveTask = ({ task, onEditTask, onDeleteTask }) => {
    const handleDeleteTask = () => {
      onDeleteTask(task);
    };
    const handleDescriptionBlur = (e) => {
      if (e.target.value !== task.description) {
        onEditTask({ id: task.id, description: e.target.value });
      }
    };
    return (
      <div style={{ display: "flex", padding: "0 0.5rem 0.5rem 0.5rem", width: "100%", boxSizing: "border-box" }}>
        <Input type="text" defaultValue={task.description} onBlur={handleDescriptionBlur} />
        <StyledButton onClick={handleDeleteTask}>X</StyledButton>
      </div>
    );
  };

  const orderedTasks = [...tasks].sort((a, b) => a.completed_date - b.completed_date);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div>
          {console.log(orderedTasks)}

          <div>
            <h2>Completed</h2>
            {orderedTasks.map((task) => (
              <ArchiveTask key={task.id} task={task} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ArchiveList;
