import { useDeleteToDoMutation } from '../../services/toDo'

const Task = ({ id, title }) => {
  const [deleteToDo] = useDeleteToDoMutation()
  return (
    <li>
      <p>{title}</p>
      <button onClick={() => deleteToDo(id)}>delete</button>
    </li>
  )
}

export default Task
