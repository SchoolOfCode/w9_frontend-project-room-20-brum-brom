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
          ❌
        </button>
        <button className="white-button" onClick={toggleEdit}>
          ✏️
        </button>
        <button className="white-button" onClick={toggleComplete}>
          ✅
        </button>
      </div>
    </li>
  );
}

export default ListItem;
