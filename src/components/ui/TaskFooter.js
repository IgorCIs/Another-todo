import React from 'react'
import TabsFilter from './TabsFilter';
import './../../styles/TaskFooter.sass'

const TaskFooter = ({list=[], sort, onSort=f=>f, clearCompleted=f=>f}) => {
    return (
        list.length ? 
            <div className='taskFooter'>
                <div className='left'> {list.length} item left </div>
                <TabsFilter sort={sort} onSort={onSort}/>
                {list.some(task => task.completed) ?
                    <div className='clear' onClick={clearCompleted}> clear completed </div> : <div> </div>
                }                
            </div> : ''
            
    )
}


export default TaskFooter 