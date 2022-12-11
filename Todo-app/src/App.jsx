import { useState } from "react";
import reactLogo from "./assets/react.svg";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import AddNote from "./components/AddNote";
import Header from "./components/Header";

function App() {
  const [Note, setNote] = useState([]);

  function handleDelete(id) {
    const newNote = Note.filter((note) => note.id !== id);
    setNote(newNote);
  }

  function addNote(text) {
    const noteRecieved = {
      id: nanoid(),
      date: new Date().toLocaleDateString(),
      text: text,
    };
    setNote([...Note, noteRecieved]);
    console.log(noteRecieved);
  }
  return (
    <div className="name">
      <Header />
      <NotesList notes={Note} addNote={addNote} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
