"use client"

import { useEffect, useRef } from 'react'
import styles from './todolist.module.css'
import { BsX, BsTrash,BsCheck } from "react-icons/bs"

type TodoListProps = {
    dispatch: React.Dispatch<FinalAction>,
    todos: Todo[]
}

export default function TodoList({ dispatch, todos }: TodoListProps) {
    const initialRender = useRef(true);

  
   //Every time there's a change in todos we update our localstorage
    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
            return;
        }
      localStorage.setItem('localData', JSON.stringify(todos));
    },[todos])
    
  return (
    todos.map(todo => (
        <div className={styles.todolist_container} key={todo.id}>
            <div className={styles.flex_container}>
                <div className={styles.flex_child}>
                    <p style={{textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? 'gray' : ' ' }}>{todo.data}</p>
                    <p style={{textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? 'gray' : ' ' }}>{todo.date} | {todo.time}</p>
                </div>

                <div className={styles.flex_child}>
                    <div className={styles.button_container}>
                        <button onClick={()=>  dispatch({type: 'status', payload: {id: todo.id} })}><span>
                            {todo.completed ? <BsX size="1.2rem" color="#EDEDED"/> : <BsCheck size="1.2rem" color="#EDEDED"/> }  </span></button>
                        <button onClick={()=> dispatch({type: 'delete', payload: {id: todo.id} })}><span><BsTrash size="1.2rem" color="#EDEDED"/></span></button>
                    </div>
                </div>
            </div>
        </div>
    ))
  )
}
