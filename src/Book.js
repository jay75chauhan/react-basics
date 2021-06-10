import React from "react";

const Book = ({ img, title }) => {
  // attribute eventHandler
  // onclick,onMouseOver
  const clickHandler = () => {
    alert("owowowwo");
  };

  const complexex = (title) => {
    console.log(title);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.clear();
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <button type="button" onClick={clickHandler}>
        owowo
      </button>
      <button type="button" onClick={() => complexex(title)}>
        author
      </button>
    </article>
  );
};

// const Greeting = () => {
//   return React.createElement("h1", {}, "hiii");
// };
export default Book;
