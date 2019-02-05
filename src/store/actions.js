import c from "./constans";
import v4 from 'uuid'

const addTask = text => 
    ({
        type: c.ADD_TASK,
        text,
        id: v4() 
    })

const removeTask = id => 
    ({
        type: c.REMOVE_TASK,
        id
    })

const toggleComplete = id => 
    ({
        type: c.TOGGLE_COMPLETE,
        id
    })

const setSort = sort => 
    ({
        type: c.SET_SORT,
        sort
    })

const clearCompleted = () => 
    ({
        type: c.CLEAR_COMPLETED
    })


    

export {
    toggleComplete,
    addTask,
    removeTask,
    setSort,
    clearCompleted
}