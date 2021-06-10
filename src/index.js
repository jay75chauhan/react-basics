import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

// statless functional component
//always return jsx
//return single element
//

function Greeting() {
  return (
    <sectio className="booklist">
      {books.map((books) => {
        return <Book key={books.id} {...books}></Book>;
      })}
    </sectio>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
