function Breathe(props) {
  return (
    <div id="breathe-container" className="containers">
      {props.children}
      <iframe
        width="90%"
        src="https://www.youtube.com/embed/BHY0FxzoKZE"
      ></iframe>
    </div>
  );
}

export default Breathe;
