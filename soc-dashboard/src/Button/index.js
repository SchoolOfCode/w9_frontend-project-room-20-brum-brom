function Button({ text, onClick, value }) {
  return (
    <button onClick={onClick} value={value}>
      {text}
    </button>
  );
}

export default Button;
