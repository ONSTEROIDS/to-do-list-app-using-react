import React, { useState } from "react";
import Inputarea from "./inputarea";
import Todolist from "./todolist";

function App() {
  const [setItems, updateItems] = useState([]);

  function addItem(inputText) {
    updateItems((previtem) => {
      return [...previtem, inputText];
    });
    setinputText("");
  }
  function deleteItem(id) {
    updateItems((previtem) => {
      return previtem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <Inputarea onAdd={addItem} />
      <div>
        <ul>
          {setItems.map((todoItem, index) => (
            <Todolist
              key={index}
              id={index}
              text={todoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
