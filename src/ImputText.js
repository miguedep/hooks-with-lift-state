import React from "react";
export function ImputText({ text, updateText }) {
  const handleText = e => {
    updateText(e.target.value);
  };
  return (
    <form>
      <h2>Write some text</h2>
      <input
        value={text}
        onChange={handleText}
        placeholder={"Write something..."}
      />
    </form>
  );
}
