import { useDispatch } from 'react-redux';
import { toggleAllTodos } from './redux/todoSlice';

export function ToggleTodos({ isAllCompleted }) {
  const dispatch = useDispatch();

  return (
    <>
      <input
        checked={isAllCompleted}
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange={(e) => dispatch(toggleAllTodos())}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
}
