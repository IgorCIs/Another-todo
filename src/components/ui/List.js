import React from 'react'
import Task from './Task';
import './../../styles/List.sass'


const List = ({ list=[], onRemove=f=>f, onToggleComplete=f=>f }) => (
    <div className='taskList'>
        {list.map(task => (
            <Task {...task}
                    key={task.id}
                    onRemove={() => onRemove(task.id)}
                    onToggleComplete={() => onToggleComplete(task.id)}
            />
        ))}
    </div>
)
    
export default List
