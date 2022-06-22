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
      {text}
      <div id="icons-check">
        <button onClick={deleteList}>DELETE</button>
        <button onClick={toggleEdit}>EDIT</button>
        <button onClick={toggleComplete}>DONE</button>
      </div>
    </li>
  );
}

export default ListItem;
