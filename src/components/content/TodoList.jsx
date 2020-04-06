import React from "react";
import ToDoItem from "./ToDoItem";
import TodosData from "../../TodosData";

// console.log(TodosData);

const todoItems = TodosData.map((todo) => <ToDoItem key={todo.id} item={todo.item} completed={todo.completed}/>);

const TodoList = () => {
  return <div className="todo-list">{todoItems}</div>;
};

export default TodoList;
