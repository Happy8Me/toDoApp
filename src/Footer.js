import { useSelector, useDispatch } from 'react-redux';
import { clearAllCompletedTodos } from './redux/todoSlice';
import { FilterStatus } from './utils/enums';
import { FilteredItem } from './FilteredItem';

const FilterConfig = [
  {
    title: "All",
    id: FilterStatus.ALL
  },
  {
    title: "Active",
    id: FilterStatus.ACTIVE
  },
  {
    title: "Completed",
    id: FilterStatus.COMPLETED
  }
]

export function Footer ({updateFilter, filter}) {

  const activeTodosCount = useSelector((state) => {
    return state.todos.filter(todo => todo.completed === false).length
  });

  const todos = useSelector(state => state.todos);

  const dispatch = useDispatch();

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{ activeTodosCount }</strong> items left
      </span>
      <ul className="filters">
        {FilterConfig.map(filterItem => (
          <FilteredItem 
            key={filterItem.id}
            item={filterItem}
            filter={filter}
            updateFilter={updateFilter}
          />
        ))}
      </ul>
      { 
        <button 
          className="clear-completed"
          onClick={(e) => {
            e.preventDefault();
            dispatch(clearAllCompletedTodos())
          }}  
        >
        Clear completed</button> }
    </footer>
  )
};
