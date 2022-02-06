import { Navigate } from "react-router-dom";
import TaskList from "./TaskList";

function TaskPage({ user }) {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <main>
      <h1>TASKS</h1>
      <TaskList />
    </main>
  );
}

export default TaskPage;
