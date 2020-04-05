import React from "react";

const TodoList = () => {
  return (
    <div>
      <h4>ToDo List</h4>
      <ol>
        <li>
          Item
          <input type="checkbox" />
        </li>
        <li>
          Item
          <input type="checkbox" />
        </li>
        <li>
          Item
          <input type="checkbox" />
        </li>
      </ol>
    </div>
  );
};

export default TodoList;
