import "./App.css";
import { useEffect, useState } from "react";
import Notes from "./components/Notes";
import NoteItem from "./components/NoteItem";

function App() {
  const [notesObj, setNotesObj] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("data")===null) {
      localStorage.setItem("data", JSON.stringify([]));
    }
  }, [notesObj]);
  

  const [note, setNote] = useState({
    title: "",
    status: "pending",
  });

  const onChange = (e) => {
    setNote((previous) => {
      return { ...previous, title: e.target.value };
    });
  };

  const addNote = () => {
    setNotesObj(JSON.parse(localStorage.getItem("data")));
    let newObj = JSON.parse(localStorage.getItem("data"));
    if (note.title !== "") {
      newObj.push({
        title: note.title,
        status: note.status,
      });
      localStorage.setItem("data", JSON.stringify(newObj));
      setNote({ title: "", status: "pending" });
    }
  };

  let notes = JSON.parse(localStorage.getItem("data"));
  return (
    <div className="App">
      <header className="App-header">
        <div id="container">
          <div id="textBox">
            <input
              type="text"
              id="inputText"
              value={note.title}
              onChange={onChange}
              autoComplete="off"
            />
            <button id="addBtn" onClick={addNote}>
              Add
            </button>
          </div>

          {   
            notes!=""? (
            <Notes setNotesObj={setNotesObj}/>
          ) : (
            <NoteItem/>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
