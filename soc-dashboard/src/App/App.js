import React from "react"
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

const quotes = [
  `"The beautiful thing about learning is nobody can take it away from you." - B.B. King`,
  `"If you don't like something, change it. If you can't change it, change your attitude." - Maya Angelou`,
  `"Learning never exhausts the mind." ― Leonardo da Vinci`,
  `"Wisdom… comes not from age, but from education and learning." ― Anton Chekhov`,
  `On Love of Learning: "I have no special talent. I am only passionately curious." - Einstein`,
  ` "The more I read, the more I acquire, the more certain I am that I know nothing." ― Voltaire`,
  `"For the things we have to learn before we can do them, we learn by doing them." ― Aristotle`,
  `"We learn from failure, not from success!" - Bram Stoker`,
  `"A man who asks is a fool for five minutes. A man who never asks is a fool for life." - Chinese Proverb`,
  `"You don't learn to walk by following rules. You learn by doing, and by falling over." - Richard Branson`,
  `"Learn continually- there's always one more thing to learn!" - Steve Jobs`,
];
const randomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

const videos = [
  "https://www.youtube.com/embed/j7rKKpwdXNE",
  "https://www.youtube.com/embed/itZMM5gCboo",
  "https://www.youtube.com/embed/inpok4MKVLM",
  "https://www.youtube.com/embed/JUP_YdYyfQw",
  "https://www.youtube.com/embed/mj2RGYpknzA",
  "https://www.youtube.com/embed/M-8FvC3GD8c",
  "https://www.youtube.com/embed/1Ck4mdSr0yU",
];
const randomVideo = videos[Math.floor(Math.random() * videos.length)];

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

  const [targetText, setTargetText] = useState("");
  const [listToDo, setlistToDo] = useState(getList);
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
        id: Math.floor(Math.random() * 10000000),
        text: targetText,
        complete: false,
        edit: false,
      },
    ]);
    console.log(listToDo);
    setTargetText("");
  }


  useEffect(function localGet() {
    const localTodos = JSON.parse(localStorage.getItem("listtodo"));
    setlistToDo(localTodos);
  }, []);

  useEffect(() => {
    if (listToDo) {
      localStorage.setItem("listtodo", JSON.stringify(listToDo));
    }
  }, [listToDo]);

  function getList() {
    const localTodos = JSON.parse(localStorage.getItem("listtodo"));
    if (localTodos === undefined) {
      return [];
    } else {
      return localTodos;
    }
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
    setEmoji(data.payload[0].emoji);

    setReflection(data.payload[0].reflections);
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
  }
  function chooseDay(e) {
    let chosenDay = e.target.value;
    setDay(chosenDay);
  }

  // Package into object DONE
  // send object to back end

  function updateNotes(e) {
    e.preventDefault();
    const updateNotesObject = {
      day: day,
      week: week,
      post: notesText,
      emoji: emoji,
      reflections: reflection,
    };

    console.log("This is the packaged object: ", updateNotesObject);

    fetch(`http://localhost:3001/notes/?week=${week}&day=${day}`, {
      method: "PATCH",
      body: JSON.stringify(updateNotesObject),
      headers: { "Content-type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
 
  return (
    <div className="App">
      <div id="header-container">
        <div id="logo-container">
          <img src={logo} alt="School of Code Logo" height="100" />
          <h1>DASHBOARD</h1>
        </div>
        <div id="quote-container">
          <Quotes />
        </div>
      </div>
      <div id="body-container">
        <Notes>
          <h2>Notes</h2>
          <Dropdown onChange={chooseWeek}></Dropdown>
          <div id="day-button-container">
            {dayName.map(function (eachDay) {
              let colourClass;
              if (eachDay === day) {
                colourClass = "highlighted";
              } else {
                colourClass = "unhighlighted";
              }
              return (
                <Button
                  className={colourClass}
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
              let colourClass;
              if (eachSmiley.id === emoji) {
                colourClass = "highlighted";
              } else {
                colourClass = "unhighlighted";
              }
              return (
                <Button
                  className={colourClass}
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
            rows={4}
            notesText={reflection}
            onChange={function (e) {
              setReflection(e.target.value);
              console.log(reflection);
            }}
          ></Textarea>
          <Button
            text={"Update"}
            className={"highlighted"}
            onClick={updateNotes}
          />
        </Notes>
        <Targets>
          <h2>Targets</h2>
          <p>Use this form to keep track of your targets and goals:</p>
          <Textarea onChange={handleChange} notesText={targetText} />

          <Button
            text={"Add Target"}
            onClick={addToList}
            className={"highlighted"}
          />
          <List
            targetText={targetText}
            listToDo={listToDo}
            deleteList={deleteList}
            toggleComplete={toggleComplete}
            toggleEdit={toggleEdit}
            handleEdit={handleEdit}
          ></List>
        </Targets>
        <Breathe src={randomVideo}>
          <h2>Breathe</h2>
          <p>
            Try to take regular breaks from your coding when you can - here's a
            suggestion:
          </p>
        </Breathe>
      </div>
    </div>
  );
}

export default App;
