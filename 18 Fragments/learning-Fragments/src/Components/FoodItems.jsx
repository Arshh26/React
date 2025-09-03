import Item from "./Item";

const FoodItems = () => {
  let foodItems = [
    "Green Vegetables",
    "fruits",
    "Milk",
    "Water",
    "Coconut Water",
  ];

  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item key={item} foodItems={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
