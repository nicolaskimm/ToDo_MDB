import React from 'react';
import './TodoList.css';

const TodoList = (props) => {
    return (
        props.taskArray.map(item => {
            return (
                <li className='singleItem'key={item.id}>
                    <p className='singleItem_text'>{item.text}</p>
                </li>
            )
        }) 
    )
}

export default TodoList;