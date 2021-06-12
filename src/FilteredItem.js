export const FilteredItem = ( {filter, item, updateFilter} ) => {
    return (
        <li>
          <a 
            href="/" 
            className={filter === item.id ? "selected" : ""}
            onClick={(e) => {
              e.preventDefault();
              updateFilter(item.id)
            }}
          >
            {item.title}</a>
        </li>
    )
};