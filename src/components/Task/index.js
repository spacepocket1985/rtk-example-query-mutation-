import { useDeleteToDoMutation } from "../../services/toDo";

const Task = ({ ID: id, title }) => {
  const [deleteToDo] = useDeleteToDoMutation();
  return (
    <li>
      <p>{title}</p>
      <button onClick={() => deleteToDo(id)}>delete</button>
    </li>
  );
};

export default Task;
