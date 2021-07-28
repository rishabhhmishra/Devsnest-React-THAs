import { useState } from "react";
import AddCalorie from "./AddCalorie";
import CardWrapper from "./CardWrapper";

const CalorieContainer = () => {
  // const arr = [
  //   {
  //     food: "Pizza",
  //     calorie: "55",
  //   },
  //   {
  //     food: "Cake",
  //     calorie: "48",
  //   },
  //   {
  //     food: "Jalebi",
  //     calorie: "44",
  //   },
  //   {
  //     food: "Burger",
  //     calorie: "100",
  //   },
  //   {
  //     food: "Dahi vada",
  //     calorie: "37",
  //   },
  //   {
  //     food: "Aalu roti",
  //     calorie: "41",
  //   },
  //   {
  //     food: "Samosa",
  //     calorie: "32",
  //   },
  // ];

  let arr = [];

  let [foods, setFood] = useState(arr);

  const addEntry = (newFood, newCal) => {
    const newEntry = { food: newFood, calorie: newCal };
    setFood([newEntry, ...foods]);
  };

  const deleteEntry = (id, food) => {
    const newFood = foods.filter((el, idx) => idx !== id);
    setFood(newFood);
  };

  const updateEntry = (id, newFood, newCal, edit, editClicked) => {
    let newFoodArr = [...foods];

    newFoodArr[id].food = newFood;
    newFoodArr[id].calorie = newCal;

    setFood(newFoodArr);
    editClicked((edit = false));
  };

  return (
    <div>
      <AddCalorie addEntry={addEntry} />

      <div className="calorie-container">
        {foods.length > 0 ? (
          foods.map((item, idx) => (
            <CardWrapper
              key={idx}
              food={item.food}
              onDelete={deleteEntry}
              onEdit={updateEntry}
              calorie={item.calorie}
              id={idx}
            />
          ))
        ) : (
          <h1 style={{ textAlign: "center" }}>No entry</h1>
        )}
      </div>
    </div>
  );
};

export default CalorieContainer;
