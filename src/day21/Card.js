import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Card = ({ food, calorie, COLOR, id, onDelete, edit, editClicked }) => {
  return (
    <div className="card">
      <h3>{food}</h3>
      <h4>
        you have consumed <span style={{ color: COLOR }}>{calorie}</span> cals
        today
      </h4>
      <IconButton
        className="del-btn"
        aria-label="delete"
        onClick={() => onDelete(id, food)}
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        className="edit-btn"
        aria-label="edit"
        onClick={() => editClicked((edit = true))}
      >
        <EditIcon />
      </IconButton>
    </div>
  );
};

export default Card;
