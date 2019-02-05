import React from 'react'
import './../../styles/TaskInput.sass'

const TaskInput = ({onNewTask}) => {
    let _title = ''
    
    const addTask = e => {
        e.preventDefault()
        if(_title.value.length) {
            onNewTask(_title.value)
            _title.value = ''
        }

    }

    return (
        <form className='TaskInput' onSubmit={addTask}>
            <input type='text'
                    ref={input => _title = input}
                    placeholder='What you need to do?'  
            ></input>
        </form>
    )
}

export default TaskInput
