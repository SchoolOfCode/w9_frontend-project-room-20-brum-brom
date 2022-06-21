import "./App.css";
import Notes from "../Notes";
import Dropdown from "../Dropdown";
import Button from "../Button";
import Textarea from "../Textarea";

let dayName = ["Mon", "Tue", "Wed", "Thu", "Fri", "W-end"];

function App() {
  return (
    <div className="App">
      <div id="header">
        <h1>SOC LOGO - DASHBOARD</h1>
        <p>"inspirational quote"</p>
      </div>
      <div id="body-container">
        <Notes>
          <h2>Notes</h2>
          <Dropdown></Dropdown>
          <div id="day-button-container">
            {dayName.map(function (eachDay) {
              return <Button days={eachDay}></Button>;
            })}
          </div>
          <Textarea />
          <p>How did today go?</p>
          <SmileyButtons />
        </Notes>
      </div>
    </div>
  );
}

export default App;
