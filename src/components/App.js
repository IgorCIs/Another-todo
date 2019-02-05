import React, { Fragment } from 'react'
import { TaskList, ListFooter, TaskAdder } from './containers';
import TaskFooter from './ui/TaskFooter';

const App = () => {
    return (
        <Fragment>
            <TaskAdder/>
            <TaskList/>
            <ListFooter/>
        </Fragment>
    )
}

export default App