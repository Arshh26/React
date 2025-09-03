import Item from "./Item";

const FoodItems = ({ items }) => {
  // let foodItems = [
  //   "Green Vegetables",
  //   "fruits",
  //   "Milk",
  //   "Water",
  //   "Coconut Water",
  // ];

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItems={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
