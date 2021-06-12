import "./styles.css";
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { InputTodo } from './InputTodo';
import { ListTodos } from './ListTodos';
import { Footer } from './Footer';
import { ToggleTodos } from './ToggleTodos';

export default function App() {

  const [filter, setFilter] = useState("all");
  const todos = useSelector(state => state.todos)
  const isAllCompleted = (todos.filter(todo => todo.completed).length === todos.length)
  const updateFilter = (filterValue) => {
    setFilter(filterValue)
  }

  const filteredTodos = todos.filter(todo => {
    switch(filter) {
      case "active":
        return !todo.completed;
      case "completed":
        return todo.completed === true;
      case "all":
        return todo;
    }
  })

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <InputTodo />
      </header>
      <section className="main">
        {todos.length > 0 && (<ToggleTodos isAllCompleted={isAllCompleted}/>)}  
        <ListTodos todos={filteredTodos}/>
      </section>
      {todos.length > 0 && (
        <Footer 
          updateFilter={updateFilter}
          filter={filter}
        />
      )}
    </section>
  );
}
