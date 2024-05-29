import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((nodeItem) => (
        <Note
          key={nodeItem.key}
          title={nodeItem.title}
          content={nodeItem.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
