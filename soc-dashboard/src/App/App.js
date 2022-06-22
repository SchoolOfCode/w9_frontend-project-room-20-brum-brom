import "./App.css";
import { useState, useEffect } from "react";
import Notes from "../Notes";
import Dropdown from "../Dropdown";
import Button from "../Button";
import Textarea from "../Textarea";
import Targets from "../Targets";
import Breathe from "../Breathe";
import logo from "../logo.png";
import Quotes from "../Quote";
import List from "../List";

let dayName = ["Mon", "Tue", "Wed", "Thu", "Fri", "W-end"];
let smileys = [
  { emoji: "😊", id: "happy" },
  { emoji: "😐", id: "indifferent" },
  { emoji: "😔", id: "sad" },
];

function App() {
  const [week, setWeek] = useState("Week1");
  const [day, setDay] = useState("Mon");
  const [notesText, setNotesText] = useState("");
  const [emoji, setEmoji] = useState("indifferent");
  const [reflection, setReflection] = useState("");
  const [quote, setQuote] = useState("");

  const [targetText, setTargetText] = useState("");
  const [listToDo, setlistToDo] = useState([]);
  const [editTargetText, setEditTargetText] = useState("");

  function handleChange(event) {
    setTargetText(event.target.value);
    console.log(targetText);
  }

  function addToList() {
    if (targetText === "") {
      return;
    }
    setlistToDo([
      ...listToDo,
      {
        id: Math.floor(Math.random() * 100000),
        text: targetText,
        complete: false,
        edit: false,
      },
    ]);
    console.log(listToDo);
    setTargetText("");
  }

  function deleteList(id) {
    setlistToDo([...listToDo].filter((e) => e.id !== id));
  }

  function toggleComplete(id) {
    setlistToDo(
      listToDo.map((e) => {
        if (e.id === id) {
          e.complete = !e.complete;
          return e;
        } else {
          return e;
        }
      })
    );
  }

  function toggleEdit(id) {
    setlistToDo(
      listToDo.map((e) => {
        if (e.id === id) {
          e.edit = !e.edit;
          e.text = editTargetText;
          return e;
        } else {
          return e;
        }
      })
    );
  }

  function handleEdit(event) {
    setEditTargetText(event.target.value);
  }

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

  function updateNotes(e) {
    e.preventDefault();
    const updateNotesObject = {
      day: day,
      week: week,
      post: notesText,
      emoji: emoji,
      reflections: reflection,
    };
    console.log(updateNotesObject);

    fetch(`http://localhost:3001/notes/?week=${week}&day=${day}`, {
      method: "PATCH",
      body: JSON.stringify(updateNotesObject),
      header: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  // console.log("Week is now:" + week + "Day is now:" + day);
  return (
    <div className="App">
      <div id="header-container">
        <div id="logo-container">
          <img src={logo} height="100" />
          <h1>DASHBOARD</h1>
        </div>
        <div id="quote-container">
          <Quotes quote={quote} />
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
          <Textarea
            reflection={reflection}
            onChange={function (e) {
              setReflection(e.target.value);
              console.log(reflection);
            }}
          ></Textarea>
          <Button text={"Update"} onClick={updateNotes} />
        </Notes>
        <Targets>
          <h2>Targets</h2>

          <Textarea onChange={handleChange} notesText={targetText} />

          <Button text={"Add Target"} onClick={addToList} />
          <List
            targetText={targetText}
            listToDo={listToDo}
            deleteList={deleteList}
            toggleComplete={toggleComplete}
            toggleEdit={toggleEdit}
            handleEdit={handleEdit}
          ></List>
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
