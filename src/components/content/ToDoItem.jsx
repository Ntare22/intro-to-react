import React from 'react';

const style = {
  fontSytle: 'italic',
  color: '#cdcdcd',
  textDecoration: 'line-through'
}

const ToDoItem = (props) => {
  console.log(props)
  return (
    <div className='todo-item'>
      <input 
        type="checkbox" 
        checked={props.completed} 
        onChange={() => props.handleChange(props.id)}
      />
      <p style={props.completed ? style : null}>{props.item}</p>
    </div>
  );
}

export default ToDoItem;

