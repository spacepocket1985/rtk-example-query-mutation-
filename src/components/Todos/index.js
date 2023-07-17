import { useGetToDosQuery } from "../../services/toDo";
import Task from "../Task";
const Todos = () => {
  const { data, error, isLoading } = useGetToDosQuery();
  return (
    <div>
      {isLoading && <p>...loading</p>}
      <ul>{data && data.map((item) => <Task key={item.ID} {...item} />)}</ul>
    </div>
  );
};

export default Todos;
