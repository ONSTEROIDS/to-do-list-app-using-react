import React from "react";

function Todolist(props) {
  //TO  JUST LINE THROUGH
  //const [isdone, setisdone] = useState(false);

  // function handleclick() {
  //   // setisdone((prevValue) => {
  //   //   return !prevValue;
  //   // });
  // }
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text} </li>
      {/* <li style={{ textDecoration: isdone ? "line-through" : "none" }}>
        {props.text}
      </li> */}
    </div>
  );
}

export default Todolist;
