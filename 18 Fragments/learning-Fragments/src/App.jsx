import React from "react";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Green Vegetables", "Lemon Juice", "Water", "Coconut Water"];

  //let foodItems = [];

  // if (foodItems.length === 0) {
  //   return <h3>I am Hungry</h3>;
  // }

  //let emptyMessage = foodItems.length === 0 ? <h3>I am Hungry</h3> : null;

  return (
    <React.Fragment>
      <h1>Healthy Foods</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </React.Fragment>
  );
}

export default App;
