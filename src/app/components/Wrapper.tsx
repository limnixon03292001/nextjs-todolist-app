"use client"

import { useEffect, useReducer } from "react"
import FormInput from "./FormInput/FormInput"
import TodoList from "./TodoList/TodoList"
import { initialStateTodo, reducer } from "../../../reducer/reducer"
import Footer from "./Footer/Footer"

 

export default function Wrapper() {
    const [todos, dispatch] = useReducer(reducer, initialStateTodo)

    useEffect(() => {
      const todos = JSON.parse(localStorage.getItem('localData') as string);
      console.log(todos)
      dispatch({ type: 'setLocal', payload: { mainData: todos }})
    },[])

  return (
    <>
        <div className="form">
          <FormInput dispatch={dispatch} todos={todos}/>
        </div>
        <div className="todo-list">
          <TodoList todos={todos} dispatch={dispatch}/>
        </div>
        <div className="footer">
          <Footer todos={todos} dispatch={dispatch} />
        </div>
    </>
  )
}
