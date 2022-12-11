import React from "react";
import AddNote from "./AddNote";
import Note from "./Note";

const NotesList = ({ notes, addNote, handleDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      {notes.map((note) => (
        <Note id={note.id} text={note.text} date={note.date} handleDelete={handleDelete}/>
      ))}
      <AddNote addNote={addNote} />
    </div>
  );
};

export default NotesList;
