import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = [];
  /*let foodItems = [
    "Green Vegetables",
    "fruits",
    "Milk",
    "Water",
    "Coconut Water",
  ];*/

  // if (foodItems.length === 0) {
  //   return <h3>I am Hungry</h3>;
  // }

  //let emptyMessage = foodItems.length === 0 ? <h3>I am Hungry</h3> : null;

  return (
    <React.Fragment>
      {/* short <></> */}
      <h1>Healthy Foods</h1>
      {foodItems.length === 0 && <h3>I am Hungry</h3>}
      {/* Ternary Operators */}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
