import React from "react";

// import NoteItem from "./NoteItem";
function Notes(props) {
  const removeNote = (index) => {
    let newObj = JSON.parse(localStorage.getItem("data"));
    newObj.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(newObj));
    props.setNotesObj(newObj);
    // window.location.reload();
  };

  const updateStatus = (index) => {
    let newObj = JSON.parse(localStorage.getItem("data"));
    let title = newObj[index].title;
    let status = newObj[index].status;
    if (status === "pending") {
      newObj.splice(index, 1, { title: title, status: "completed" });
    } else {
      newObj.splice(index, 1, { title: title, status: "pending" });
    }
    localStorage.setItem("data", JSON.stringify(newObj));
    props.setNotesObj(newObj);
    // window.location.reload();
  };

  let notes = JSON.parse(localStorage.getItem("data"));
  return (
    <>
      <div id="boxContainer">
        {notes &&
          notes.map((note, index) => {
            return (
              <div className="box" key={index}>
                <h4>{index+1 + ". " + note.title}</h4>
                <small>Status: {note.status}</small>
                <button
                  onClick={() => {
                    updateStatus(index);
                  }}
                >
                  Update Status
                </button>
                <button
                  onClick={() => {
                    removeNote(index);
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Notes;
