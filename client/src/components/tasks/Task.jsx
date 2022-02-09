import { STATUS } from "../common/statuses";
import styled from "styled-components";
import StyledButton from "../common/StyledButton";

const Description = styled.input`
  font-size: 1em;
  width: 25em;
  padding: 0.5rem;
  border: 0;
  border-bottom: 2px solid #ccc;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
`;
const Check = styled.input`
  appearance: none;
  background-color: #fff;
  margin: 0;
  border-bottom: 2px solid #ccc;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  font-size: 1em;
  width: 100%;
  display: grid;
  place-content: center;

  ::before {
    content: "✓";
    font-weight: bold;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
  }
  :checked::before {
    transform: scale(1);
  }
`;
const CompletableItem = styled.form`
  display: grid;
  grid-template-columns: 2em auto;
  margin: 0 0.5rem 0.5rem 0.5rem;
`;

function Task({ task, onDeleteTask, onEditTask }) {
  const isComplete = task.completed_date ? true : false;
  const handleDeleteTask = () => {
    onDeleteTask(task);
  };
  const handleDescriptionBlur = (e) => {
    if (e.target.value !== task.description) {
      onEditTask({ id: task.id, description: e.target.value });
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
    <div style={{ display: "flex" }}>
      <CompletableItem>
        <Check type="checkbox" onChange={handleCompletedChange} checked={isComplete} />
        <Description type="text" defaultValue={task.description} onBlur={handleDescriptionBlur} />
      </CompletableItem>
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
    </div>
  );
}

export default Task;
