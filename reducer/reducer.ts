import { currentDate, currentDay, currentTime, currentMonth, currentYear } from "../utils/getDate"

export const initialStateTodo: Todo[] = []

export const reducer = (todos: Todo[], action: FinalAction) => {
    switch (action.type){
        case 'add':
            return [...todos, { id: Date.now(), data: action.payload.data, completed: false, date: `${currentDay} - ${currentMonth} ${currentDate}, ${currentYear}`, time: currentTime }]
        
        case 'status':
           return todos.map(todo => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo)

        case 'delete':
            return todos.filter(todo => todo.id !== action.payload.id)

        case 'setLocal':
            if(action.payload.mainData === null){
                return todos
            } else {
                return action.payload.mainData as Todo[]
            }

        case 'clear':
            localStorage.removeItem('')
            return []

        default: 
            return todos
    }
}



 