import React from "react"

function Notes(props) {
  return (
    <div id="notes-container" class="containers">
      {props.children}
    </div>
  );
}

export default Notes;
