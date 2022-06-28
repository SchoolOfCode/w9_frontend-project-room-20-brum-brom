import React from "react"

function ListItem({
  text,
  deleteList,
  toggleComplete,
  listToDo,
  toggleEdit,
  id,
}) {
  return (
    <li
      className={
        listToDo.find((o) => o.id === id).complete ? "done" : "not-done"
      }
    >
      • {text}
      <div id="icons-check">
        <button className="white-button" onClick={deleteList}>
          <span role="img" aria-label="Delet button">❌</span>
        </button>
        <button className="white-button" onClick={toggleEdit}>
        <span role="img" aria-label="Edit button">✏️</span>  
        </button>
        <button className="white-button" onClick={toggleComplete}>
        <span role="img" aria-label="Completed button">✅</span>
        </button>
      </div>
    </li>
  );
}

export default ListItem;
