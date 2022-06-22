import "./App.css";
import { useState, useEffect } from "react";
import Notes from "../Notes";
import Dropdown from "../Dropdown";
import Button from "../Button";
import Textarea from "../Textarea";
import Targets from "../Targets";
import Breathe from "../Breathe";
import logo from "../logo.png";

let dayName = ["Mon", "Tue", "Wed", "Thu", "Fri", "W-end"];
let smileys = [
  { emoji: "😊", id: "happy" },
  { emoji: "😐", id: "indifferent" },
  { emoji: "😔", id: "sad" },
];

function App() {
  const [week, setWeek] = useState("week1");
  const [day, setDay] = useState("Mon");
  const [notesText, setNotesText] = useState("");
  const [emoji, setEmoji] = useState("indifferent");
  const [reflection, setReflection] = useState("");

  async function fetchNotes() {
    let response = await fetch(
      `http://localhost:3001/notes/?week=${week}&day=${day}`
    );
    let data = await response.json();

    setNotesText(data.payload[0].post);
  }

  useEffect(
    function () {
      fetchNotes();
    },
    [week, day]
  );

  function chooseWeek(e) {
    let chosenWeek = e.target.value;
    setWeek(chosenWeek);
    //fetchNotes();
  }
  function chooseDay(e) {
    let chosenDay = e.target.value;
    setDay(chosenDay);
    //fetchNotes();
  }

  console.log("Week is now:" + week + "Day is now:" + day);
  return (
    <div className="App">
      <div id="header-container">
        <div id="logo-container">
          <img src={logo} height="100" />
          <h1>DASHBOARD</h1>
        </div>
        <div id="quote-container">
          <p>
            "Everybody in this country should learn to program a computer
            because it teaches you how to think." - Steve Jobs
          </p>
        </div>
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
              console.log(notesText);
            }}
          />
          <p>How did today go?</p>
          <div id="smiley-button-container">
            {smileys.map(function (eachSmiley) {
              return (
                <Button
                  text={eachSmiley.emoji}
                  id={eachSmiley.id}
                  onClick={function (e) {
                    setEmoji(e.target.id);
                  }}
                ></Button>
              );
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
          <h2>Breathe</h2>
          <p> hello</p>
        </Breathe>
      </div>
    </div>
  );
}

export default App;
