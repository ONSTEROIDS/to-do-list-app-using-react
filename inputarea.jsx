import React, { useState } from "react";

function Inputarea(props) {
  const [inputText, setinputText] = useState("");
  function handlechange(event) {
    const newValue = event.target.value;
    setinputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handlechange} type="text" value={inputText} />
      <button
        onClick={() => {
          props.onAdd(inputText);
          setinputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default Inputarea;
