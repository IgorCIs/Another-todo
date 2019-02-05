import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from './reducers';
import c from './constans';

const initialState = {
    list: [
        {
            completed: false,
            id: 1,
            text: 'hi'
        },
        {
            completed: true,
            id: 2,
            text: 'comp'
        },
    ],
    sort: c.SORTED_BY_UNCOMPLETE        
}

const saver = store => next => action => {
    let result = next(action)
    localStorage['yes-todo-again'] = JSON.stringify(store.getState())
    return result
}

const store = applyMiddleware(saver)(createStore)(
    combineReducers({ ...reducers }),
    (localStorage['yes-todo-again']) ?
        JSON.parse(localStorage['yes-todo-again']) :
        initialState
)

localStorage['yes-todo-again'] = JSON.stringify(store.getState())
    
export default store