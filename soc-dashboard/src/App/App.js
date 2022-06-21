import "./App.css";
import Notes from "../Notes";
import Dropdown from "../Dropdown";
import Button from "../Button";
import Textarea from "../Textarea";
import Targets from "../Targets";
import Breathe from "../Breathe";

let dayName = ["Mon", "Tue", "Wed", "Thu", "Fri", "W-end"];
let smileys = ["😊", "😐", "😔"];

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
              return <Button text={eachDay}></Button>;
            })}
          </div>
          <p>Notes:</p>
          <Textarea rows={40} />
          <p>How did today go?</p>
          <div id="smiley-button-container">
            {smileys.map(function (eachSmiley) {
              return <Button text={eachSmiley}></Button>;
            })}
          </div>
          <p>Reflections:</p>
          <Textarea></Textarea>
          <Button text={"Update"} />
        </Notes>
        <Targets>
          <h2>Targets</h2>

          <Textarea />

          <Button text={"Add Target"} />
        </Targets>
        <Breathe>
          <p> hello</p>
        </Breathe>
      </div>
    </div>
  );
}

export default App;
