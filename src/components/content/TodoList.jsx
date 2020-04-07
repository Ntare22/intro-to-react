import React from "react";
import ToDoItem from "./ToDoItem";
import TodosData from "../../TodosData";

// console.log(TodosData);


// const TodoList = () => {
  //   return <div className="todo-list">{todoItems}</div>;
  // };
  
  class TodoList extends React.Component {
    state = { 
      list: TodosData
    }
    
    render() { 
      const todoItems = this.state.list.map((todo) => <ToDoItem key={todo.id} item={todo.item} completed={todo.completed}/>);
      console.log(this.state.list)
      return ( 
        <div className="todo-list">{todoItems}</div>
      );
    }
}
 
export default TodoList;
