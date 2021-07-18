import { useState } from "react";
import Card from "./Card";

const CardContainer = (props) => {
  const arr = [
    {
      food: "Oats",
      calorie: "389"
    },
    {
      food: "Cookies",
      calorie: "48"
    },

    {
      food: "Bread Butter",
      calorie: "142"
    },
    {
      food: "Pizza",
      calorie: "55"
    },
    {
      food: "Samosa",
      calorie: "32"
    },

    {
      food: "Burger",
      calorie: "100"
    },

    {
      food: "4*Boilded Eggs",
      calorie: "312"
    }
  ];

  // console.log(useState);
  let [foods, setFood] = useState(arr);

  // console.log(foods, setFood);

  const deleteTask = (id, food) => {
    const newFood = foods.filter((el, idx) => idx !== id);
    setFood(newFood);
  };

  return (
    <div className="card-container">
      {foods.length > 0 ? (
        foods.map((item, idx) => (
          <Card
            key={idx}
            food={item.food}
            onDelete={deleteTask}
            calorie={item.calorie}
            id={idx}
          />
        ))
      ) : (
        <h1 style={{ textAlign: "center" }}>No entry</h1>
      )}
    </div>
  );
};

export default CardContainer;
