import React, {Component} from 'react';
import './TodoItems.css'
const TodoItems = (props) => {
    const {items, deleteItem} = props;
    let length = items.length;
    const ListItems = length ? (
        items.map(item =>{
            return(
                <div key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="deadline">{item.deadline}</span>
                    <span className="action icon" onClick={() => deleteItem(item.id)}>&times;</span>
                </div>
            )
        })
    ) : <p>There is no items to show!</p>
    return (
        <div className='ListItems'>
            <div>
                <span className="name title">Task Description</span>
                <span className="deadline title">Deadline</span>
                <span className="action  title">Action</span>
            </div>
            {ListItems}
        </div>
    )
}

export default TodoItems