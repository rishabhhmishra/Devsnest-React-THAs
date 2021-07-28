import { useState } from "react";
import EditCalorie from "./EditCalorie";
import Card from "./Card";

const CardWrapper = ({ food, calorie, onDelete, onEdit, id }) => {
  let [edit, editClicked] = useState(false);

  const COLOR_CONDITION =
    calorie > 50 ? "red" : calorie > 40 ? "orange" : "green";

  return (
    <div className="card-wrapper">
      <div
        className="box"
        style={{
          backgroundColor: COLOR_CONDITION
        }}
      ></div>
      {edit ? (
        <EditCalorie
          id={id}
          editClicked={editClicked}
          onEdit={onEdit}
          edit={edit}
        />
      ) : (
        <Card
          food={food}
          calorie={calorie}
          id={id}
          COLOR={COLOR_CONDITION}
          onDelete={onDelete}
          edit={edit}
          editClicked={editClicked}
        />
      )}
    </div>
  );
};

export default CardWrapper;

// <div className="card">
//   <h3>{food}</h3>
//   <h4>
//     you have consumed{" "}
//     <span style={{ color: COLOR_CONDITION }}>{calorie}</span> cals today
//   </h4>
//   <IconButton
//     className="del-btn"
//     aria-label="delete"
//     onClick={() => onDelete(id, food)}
//   >
//     <DeleteIcon />
//   </IconButton>
//   <IconButton
//     className="edit-btn"
//     aria-label="edit"
//     onClick={() => editClicked((edit = true))}
//   >
//     <EditIcon />
//   </IconButton>
// </div>;
