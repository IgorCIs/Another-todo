import React from 'react'
import './../../styles/Task.sass'


const Task = ({ text, completed, onRemove=f=>f, onToggleComplete=f=>f }) => {
    return (
        <div className={`task ${completed ? 'completed' : '' }`}>
            <div className='col'>
                <div className='mark' onClick={onToggleComplete}>  </div>
                <div className='text'> {text} </div>
            </div>
            <div className='remove' onClick={onRemove}> x </div>
        </div>
    )
}

export default Task