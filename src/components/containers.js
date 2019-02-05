import { connect } from 'react-redux'
import { filterFunction } from '../libs/array-helpers';
import { removeTask, addTask, toggleComplete, setSort, clearCompleted } from '../store/actions';
import List from './ui/List';
import TaskFooter from './ui/TaskFooter';
import TaskInput from './ui/TaskInput';

const TaskList = connect(
    state =>
        ({
            list: [...state.list].filter(filterFunction(state.sort))
        }),
    dispatch => 
        ({
            onRemove(id) {
                dispatch(removeTask(id))
            },
            onAdd(text) {
                dispatch(addTask(text))
            },
            onToggleComplete(id) {
                dispatch(toggleComplete(id))
            }
        })
)(List)

const ListFooter = connect(
    state =>
        ({
            list: state.list,
            sort: state.sort 
        }),
    dispatch =>
        ({
            onSort(sort) {
                dispatch(setSort(sort))
            },
            clearCompleted() {
                dispatch(clearCompleted())
            }
        })
)(TaskFooter)

const TaskAdder = connect(
    null,
    dispatch => 
        ({
            onNewTask(text) {
                dispatch(addTask(text))
            }
        })
)(TaskInput)

export {
    TaskList,
    ListFooter,
    TaskAdder
}