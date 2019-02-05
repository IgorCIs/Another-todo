import React from 'react'
import './../../styles/TabsFilter.sass'


const options = {
    all: 'SORTED_BY_ALL',
    completed: 'SORTED_BY_COMPLETE',
    active: 'SORTED_BY_UNCOMPLETE',
}

const Tab = ({onClick, title, active}) => (
    <div className={`tab ${active ? 'active' : ''}`} onClick={onClick}> {title}</div>
) 

const TabsFilter = ({sort, onSort}) => (
    <div className='tabsFilter'>
        {Object.keys(options).map((item, i) => (
            <Tab onClick={() => onSort(options[item])}
                title={item}
                active={sort === options[item]}
                key={i}
            />
        ))}
    </div>
)


export default TabsFilter
