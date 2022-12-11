import React from "react";
import { useState } from "react";

const AddNote = ({ addNote }) => {
  const [noteText, setNoteText] = useState("");
  const maxChar = 200;
  function handClick() {
    if (maxChar - noteText.length >= 0) addNote(noteText);
  }

  return (
    <>
      <div className="bg-teal-600 p-2 m-8 pl-4 rounded-xl w-[450px] h-[200px]">
        <textarea
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
          cols="100"
          rows="8"
          placeholder="Type to add Note"
          className="bg-teal-600 w-[400px] outline-none text-white resize-none"
        ></textarea>
        <div className="flex justify-between items-center p-4">
          <span className="text-white">
            Remaining Characters {maxChar - noteText.length}
          </span>
          <button
            onClick={handClick}
            className="bg-white text-black rounded-lg px-3 py-2"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
