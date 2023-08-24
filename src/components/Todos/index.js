import { useGetToDosQuery } from '../../services/toDo'
import Task from '../Task'
const Todos = () => {
  const { data } = useGetToDosQuery()
  return (
    <div>
      <ul>{data && data.map(item => <Task key={item.id} {...item} />)}</ul>
    </div>
  )
}

export default Todos
