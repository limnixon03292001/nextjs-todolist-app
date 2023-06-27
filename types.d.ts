type Todo = {
    id?: number,
    data?: string,
    completed?: boolean,
    date?: string,
    time?: string
}

type ActionType  =  {
    type: 'add' | 'delete' | 'setLocal' | 'status'
    payload: {
        id?: number
        data?: string
        mainData?: Todo[]
    }
}

type ClearType = {
    type: 'clear'
}

type FinalAction = ClearType | ActionType