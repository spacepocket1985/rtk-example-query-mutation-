import { useGetToDosQuery } from "../../services/toDo";
import Task from "../Task";
const Todos = () => {
  const { data, isFetching, error } = useGetToDosQuery();

  return (
    <div>
      {isFetching && <p>Loading...</p>}
      {error && (
        <p>{`Error: ${error.status}. Error status: ${error.originalStatus}. `}</p>
      )}
      {!isFetching && !error && data && (
        <ul>
          {data.map((item) => (
            <Task key={item.id} {...item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
