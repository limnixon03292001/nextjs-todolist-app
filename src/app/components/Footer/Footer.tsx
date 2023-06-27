import { useEffect, useState } from 'react'
import styles from './footer.module.css'

type FooterProps = {
  todos: Todo[]
  dispatch: React.Dispatch<FinalAction>
}

export default function Footer({todos, dispatch} : FooterProps) {
  const [filteredTodo, setFilteredTodo] = useState<Array<Todo>>([]);

    useEffect(()=>{
       setFilteredTodo(todos.filter(todo => todo.completed === false));
    },[todos])

    return (
        <div className={styles.footer_container}>
           {todos.length === 0 ?  <p>No Task....</p> : <p>You have {filteredTodo.length} pending task</p>}
           {todos.length === 0 ? '' : <button onClick={()=> dispatch({type: 'clear'}) }><p>Clear All</p></button> } 
        </div>
    )
}
