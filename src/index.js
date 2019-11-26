import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { Button } from "./Button";
import { ImputText } from "./ImputText";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const updateCount = () => {
    setCount(count + 1);
  };
  const updateText = e => {
    setText(e);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>You clicked #{count} times</h2>
      <Button updateCount={updateCount} />
      <ImputText text={text} updateText={updateText} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
