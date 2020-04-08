import React from "react";
import ToDoItem from "./ToDoItem";
import TodosData from "../../TodosData";

class TodoList extends React.Component {
  state = {
    list: TodosData,
  };

  handleChange = (id) => {
    let newArray = [...this.state.list];

    const itemToChange = newArray.find((item) => {
      return item.id === id;
    });
    const change = itemToChange.completed
      ? (itemToChange.completed = false)
      : (itemToChange.completed = true);

    newArray[newArray.indexOf(itemToChange)].completed = change;
    this.setState({ todoItems: newArray });
  };

  render() {
    const todoItems = this.state.list.map((todo) => (
      <ToDoItem
        key={todo.id}
        id={todo.id}
        item={todo.item}
        completed={todo.completed}
        handleChange={this.handleChange}
      />
    ));
    // console.log(this.state.list)
    return <div className="todo-list">{todoItems}</div>;
  }
}

export default TodoList;
