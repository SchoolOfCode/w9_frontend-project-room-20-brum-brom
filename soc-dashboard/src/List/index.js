import React from "react"

import ListItem from "../ListItems";

function List({
  listToDo,
  deleteList,
  toggleComplete,
  toggleEdit,
  handleEdit,
}) {
  return (
    <ul>
      {listToDo.map((item) => {
        return !item.edit ? (
          <ListItem
            key={item.id}
            id={item.id}
            text={item.text}
            deleteList={() => deleteList(item.id)}
            toggleComplete={() => toggleComplete(item.id)}
            toggleEdit={() => toggleEdit(item.id)}
            listToDo={listToDo}
          ></ListItem>
        ) : (
          <div key={item.id}>
            <input type="text" id="edit-input" onChange={handleEdit}></input>
            
            <button
              className="white-button"
              id="edit-button"
              onClick={() => {
                toggleEdit(item.id);
              }}
            >
           <span role="img" aria-label="Floppy disk emoji">💾</span>
            </button>
            
          </div>
        );
      })}
    </ul>
  );
}

export default List;
