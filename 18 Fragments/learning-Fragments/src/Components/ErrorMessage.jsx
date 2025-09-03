const ErrorMessage = ({ items }) => {
  // let foodItems = [
  //   "Green Vegetables",
  //   "fruits",
  //   "Milk",
  //   "Water",
  //   "Coconut Water",
  // ];

  return (
    <>
      {items.length === 0 && <h3>I am Hungry</h3>}
      {/* Ternary Operators */}
    </>
  );
};

export default ErrorMessage;
