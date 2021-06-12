import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './redux/todoSlice';

export function InputTodo() {

  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  return (
    <input 
      className="new-todo" 
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => {
        if(e.key === "Enter") {
          if(e.target.value.trim()){
            dispatch(addTodo({
              title: value,
            }))
          }
          setValue("");
        }
      }} 
      placeholder="What needs to be done?" 
    />
  );
}
