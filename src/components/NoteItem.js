import React from "react";

function NoteItem() {
  return (
    <>
      <div
              style={{
                padding: "5px",
                margin: "10px",
                color: "gray",
                borderTop: "1px solid gray",
                fontSize: "14px",
                fontWeight:"bold"
              }}
            >
              Nothing to show! Use 'Add' button too add notes.
            </div>
    </>
  );
}

export default NoteItem;
