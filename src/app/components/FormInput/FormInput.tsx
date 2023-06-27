"use client"

import { FormEvent, useState } from 'react'
import styles from './forminput.module.css'
import { BsTextLeft } from 'react-icons/bs'


type FormInputProp = {
    dispatch: React.Dispatch<FinalAction>,
    todos: Todo[]
}

export default function FormInput({ dispatch, todos}: FormInputProp) {

   
    const [data, setData] = useState('')
   

    const handleSubmit = (e: FormEvent<HTMLFormElement>)  => {
        e.preventDefault()
        dispatch({type: 'add', payload: { data: data }})
        setData('')
        console.log("sub", todos)
    }

  return (
    <div className={styles.form_container}>
        <form onSubmit={handleSubmit}>
            <div className={styles.input_container}>
            <span className={styles.icon}> <BsTextLeft color="#C4C4C4" size="1.4rem" fontWeight="light"/></span>
                <input type="text" value={data} placeholder="Add a task..." onChange={(e) => setData(e.target.value)} />
            </div>
        </form>
    </div>
  )
}
