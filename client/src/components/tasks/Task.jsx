import { STATUS } from "../common/statuses";
import styled from "styled-components";
import StyledButton from "../common/StyledButton";
import Input from "../common/Input";
import Check from "./Check";
import { useState } from "react";

const CompletableItem = styled.form`
  display: grid;
  grid-template-columns: 2rem 1fr;
  width: 100%;
`;

function Task({ task, isEditing, onDeleteTask, onEditTask }) {
  const [description, setDescription] = useState(task.description);

  const isComplete = task.completed_date ? true : false;

  const handleDeleteTask = () => {
    onDeleteTask(task);
  };

  const handleDescriptionSubmit = (e) => {
    e.preventDefault();
    if (description !== task.description) {
      onEditTask({ id: task.id, description });
    }
  };

  const handleCompletedChange = (e) => {
    if (e.target.checked) {
      onEditTask({ id: task.id, completed_date: new Date().toUTCString() });
    } else {
      onEditTask({ id: task.id, completed_date: null });
    }
  };

  const handleStatusClick = (e) => {
    const status = e.target.name;
    if (status !== task.status) {
      onEditTask({ id: task.id, status_id: STATUS[status] });
    }
  };

  return (
    <div style={{ display: "flex", padding: "0 0 0.5rem 0", width: "100%", boxSizing: "border-box" }}>
      <CompletableItem onSubmit={handleDescriptionSubmit}>
        <Check type="checkbox" onChange={handleCompletedChange} checked={isComplete} />
        <Input type="text" onBlur={handleDescriptionSubmit} onChange={(e) => setDescription(e.target.value)} value={description} />
      </CompletableItem>
      {isEditing ? (
        <>
          <StyledButton onClick={handleDeleteTask}>X</StyledButton>
          <StyledButton onClick={handleStatusClick} name="Must">
            M
          </StyledButton>
          <StyledButton onClick={handleStatusClick} name="Should">
            S
          </StyledButton>
          <StyledButton onClick={handleStatusClick} name="Can">
            C
          </StyledButton>
        </>
      ) : null}
    </div>
  );
}

export default Task;
