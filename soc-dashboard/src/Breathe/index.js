import React from "react"

function Breathe(props) {
  return (
    <div id="breathe-container" className="containers">
      {props.children}

      <iframe width="560" height="340" src={props.src} title="breathe-videos"></iframe>
    </div>
  );
}

export default Breathe;
