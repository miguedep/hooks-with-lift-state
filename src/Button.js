import React from "react";

export function Button({ updateCount }) {
  const handleClic = () => {
    console.log("click");
    updateCount();
  };
  return <button onClick={handleClic}>Click Me!</button>;
}
