import React from 'react'
import Title from './Title';

function List() {
    const object = [
    
        {
            title: "T1",
            description: "This is T1 Product.",
            id: 1
        },
        {
            title: "T2",
            description: "This is T2 Product.",
            id: 2
        },
        {
            title: "T3",
            description: "This is T3 Product.",
            id: 3
        },
        {
            title: "T4",
            description: "This is T4 Product.",
            id: 4
        }

    ]

    const objList = object.map(obj=><Title key={obj.title} obj = {obj}/>)
    return(
        <p>{objList}</p>
    );
}

export default List
