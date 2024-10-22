import { useState } from "react";
import {
  useDeleteToDoMutation,
  useToggleToDoMutation,
  useEditToDoMutation,
} from "../../services/toDo";

const Task = ({ id, title, isCompleted }) => {

  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const activateEditeMode = () => {
    setEditMode(true);
    setNewTitle(title);
  };

  const onChangeTitleHandler = (e) => {
    setNewTitle(e.currentTarget.value.trim());
  };

  const [deleteToDo] = useDeleteToDoMutation();
  const [toggleToDo] = useToggleToDoMutation();
  const [editToDo] = useEditToDoMutation();
  return (
    <>
      {editMode ? (
        <li>
          <input value={newTitle} onChange={onChangeTitleHandler} />
          <button
            onClick={() => {
              setEditMode(false);
              editToDo({id, newTitle});
            }}
          >
            update
          </button>
        </li>
      ) : (
        <li>
          <p
            style={{ textDecoration: isCompleted ? "line-through" : "" }}
            onClick={() => {
              toggleToDo(id);
            }}
          >
            {title}
          </p>
          <button onClick={() => deleteToDo(id)}>delete</button>
          <button onClick={activateEditeMode}>edit</button>
        </li>
      )}
    </>
  );
};

export default Task;
