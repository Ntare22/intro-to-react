import React from 'react';

const ToDoItem = (props) => {
  // console.log(props)
  return (
    <div className='todo-item'>
      <input 
        type="checkbox" 
        checked={props.completed} 
        onChange={() => props.handleChange(props.id)}
      />
      <p>{props.item}</p>
    </div>
  );
}

export default ToDoItem;

