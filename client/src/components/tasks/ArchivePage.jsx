import { Navigate } from "react-router-dom";
import ArchiveList from "./ArchiveList";

function ArchivePage({ user }) {
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <main>
      <h1>ARCHIVED TASKS</h1>
      <ArchiveList />
    </main>
  );
}

export default ArchivePage;
