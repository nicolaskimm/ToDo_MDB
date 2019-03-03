import React from 'react';
import './TodoList.css';

const TodoList = (props) => {
    return (
        props.taskArray.map(item => {
            return (
                <li className='task-board_list_singleItem'key={item.id}>
                    <p className='task-board_list_singleItem-text'>{item.text}</p>
                </li>
                
            )
        }) 
    )
}

export default TodoList;