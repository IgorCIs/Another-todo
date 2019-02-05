import c from "../store/constans";


const filterFunction = type => {
    switch(type) {
        case c.SORTED_BY_COMPLETE:
            return a => a.completed
            
        case c.SORTED_BY_UNCOMPLETE:
            return a => !a.completed
        
        default:
            return f => f
    }
}

export {
    filterFunction
}