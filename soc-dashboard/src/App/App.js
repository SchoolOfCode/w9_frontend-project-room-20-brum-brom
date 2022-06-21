import "./App.css";
import { useState } from "react";
import Notes from "../Notes";
import Dropdown from "../Dropdown";
import Button from "../Button";
import Textarea from "../Textarea";
import Targets from "../Targets";
import Breathe from "../Breathe";

let dayName = ["Mon", "Tue", "Wed", "Thu", "Fri", "W-end"];
let smileys = ["😊", "😐", "😔"];

function App() {
  const [week, setWeek] = useState("week1");
  const [day, setDay] = useState("Mon");
  const [notesText, setNotesText] = useState("");

  async function fetchNotes() {
    let response = await fetch(
      `http://localhost:3001/notes/?week=${week}&day=${day}`
    );
    let data = await response.json();

    setNotesText(data.payload[0].post);
  }

  function chooseWeek(e) {
    let chosenWeek = e.target.value;
    setWeek(chosenWeek);
    fetchNotes();
  }
  function chooseDay(e) {
    let chosenDay = e.target.value;
    setDay(chosenDay);
    fetchNotes();
  }

  console.log("Week is now:" + week + "Day is now:" + day);
  return (
    <div className="App">
      <div id="header">
        <h1>SOC LOGO - DASHBOARD</h1>
        <p>"inspirational quote"</p>
      </div>
      <div id="body-container">
        <Notes>
          <h2>Notes</h2>
          <Dropdown onChange={chooseWeek}></Dropdown>
          <div id="day-button-container">
            {dayName.map(function (eachDay) {
              return (
                <Button
                  onClick={chooseDay}
                  text={eachDay}
                  value={eachDay}
                ></Button>
              );
            })}
          </div>
          <p>Notes:</p>
          <Textarea
            rows={40}
            notesText={notesText}
            onChange={function (e) {
              setNotesText(e.target.value);
            }}
          />
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
