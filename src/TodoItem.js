import {useState, useRef, useEffect} from "react";
import { useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo, updateTodo } from './redux/todoSlice';

export function TodoItem({ title, id, completed }) {

  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(title);
  const classNameCompleted = completed ? "completed" : "";
  const classNameEditing = editing ? "editing" : "";
  const editRef = useRef();

  const dispatch = useDispatch();

  const handleToggleTodo = () => {
    dispatch( toggleTodo( {id: id, completed: !completed} ) );
  }

  const handleDeleteTodo = () => {
    dispatch( deleteTodo( {id} ) )
  }

  const handleUpdateTodo = () => {
    dispatch( updateTodo( {id, value} ) )
    setEditing(false);
  }

  useEffect(() => {
    if(editing) {
      editRef.current.focus();
    }
  }, [editing])

  return (
    <li className={`${classNameCompleted} ${classNameEditing}`}>
      <div className="view">
        <input
          onChange={handleToggleTodo}
          className="toggle"
          type="checkbox"
          checked={completed}
        />
        <label 
            onDoubleClick={() => {
            if(!completed) setEditing(true)
          }}
        >{title}</label>
        <button 
          type="button" 
          className="destroy" 
          onClick={handleDeleteTodo}>
        </button>
      </div>
      <input 
        type="text" 
        className="edit" 
        value={value} 
        ref={editRef}
        onBlur={() => {
          setEditing(false);
          console.log(value)
          !completed && handleUpdateTodo();
        }}
        onChange={(e) => {
          setValue(e.target.value)
        }
        }
      />
    </li>
  );
}
