const ErrorMessage = () => {
  let foodItems = [
    "Green Vegetables",
    "fruits",
    "Milk",
    "Water",
    "Coconut Water",
  ];

  return (
    <>
      {foodItems.length === 0 && <h3>I am Hungry</h3>}
      {/* Ternary Operators */}
    </>
  );
};

export default ErrorMessage;
