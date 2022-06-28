import React from "react"

function Button({ text, onClick, value, id, className }) {
  return (
    <button onClick={onClick} value={value} id={id} className={className}>
      {text}
    </button>
  );
}

export default Button;
