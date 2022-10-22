import React, { useState } from "react";

export default function ReactState() {
  // JS Area
  const [username, setUsername] = useState("ridhafiz");

  const handleButton = () => {
    setUsername("utari");
  };

  // e adalah params untuk menangkap element input dari text
  const handleInput = (e) => {
    setUsername(e.target.value);
  };

  return (
    // JSX Area
    <div className="App">
      <h1>ReactState</h1>
      <h3> {username} </h3>
      <button onClick={handleButton}>Click Me</button>

      <input type="text" placeholder="change text" onChange={handleInput} />
    </div>
  );
}
