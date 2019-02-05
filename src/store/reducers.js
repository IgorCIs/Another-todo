import c from "./constans";

const task = (state = {}, action) => {
    switch(action.type) {
        case c.ADD_TASK: 
            return {
                id: action.id,
                text: action.text,
                completed: false
            }

        case c.TOGGLE_COMPLETE:
            return action.id !== state.id ? 
            state :
            {  
                ...state,
                completed: !state.completed
            }

        default:
            return state
    }
}

const list = (state = [], action) => { 
    switch(action.type) {
        case c.ADD_TASK: 
            return [
                ...state,
                task({}, action)
            ]

        case c.TOGGLE_COMPLETE:
            return state.map(t => task(t, action))

        case c.REMOVE_TASK:
            return state.filter(task => task.id !== action.id)

        case c.CLEAR_COMPLETED: 
            return state.filter(task => !task.completed)


        default:
            return state
    }
}

const sort = (state = c.SORTED_BY_ALL, action) => {
    switch(action.type) {
        case c.SET_SORT:
            return action.sort
        default:
            return state
    }
}

export { 
    list, 
    sort 
}