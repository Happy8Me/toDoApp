import React from 'react';
import { TodoItem } from "./TodoItem";

export function ListTodos({todos}) {
  return (
    <ul className="todo-list">
      {todos.map(todo => {
        return <TodoItem 
        key={todo.id} 
        id={todo.id}
        title={todo.title}
        completed={todo.completed}
        />
      })}
    </ul>
  );
}
