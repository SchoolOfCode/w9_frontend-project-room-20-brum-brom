import React from "react"

function Targets(props) {
  return (
    <div id="targets-container" className="containers">
      {props.children}
    </div>
  );
}

export default Targets;
