function Breathe(props) {
  return (
    <div id="breathe-container" className="containers">
      {props.children}

      <iframe width="560" height="340" src={props.src}></iframe>
    </div>
  );
}

export default Breathe;
