import React from 'react';
import './TodoList.css';

const TodoList = (props) => {
    return (
        props.taskArray.map(item => {
            return (
                <ul className='task-board_list'>
                    <li className='task-board_list_singleItem'key={item.id}>
                        <p className='task-board_list_singleItem-text'>{item.text}</p>
                    </li>
                </ul>
                
            )
        }) 
    )
}

export default TodoList;