import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > form": {
      margin: theme.spacing(1),
      width: "1"
    }
  }
}));

const EditCalorie = ({ id, edit, editClicked, onEdit }) => {
  const classes = useStyles();

  const [food, setFood] = useState("");
  const [cal, setCal] = useState("");

  return (
    <div className="edit-calorie">
      <form className={classes.root} noValidate autoComplete="off">
        {/* Input Field */}
        <TextField
          id="outlined-basic"
          className="input"
          type="text"
          label="Food Name"
          variant="outlined"
          size="small"
          margin="dense"
          onChange={(e) => setFood(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          className="input"
          type="number"
          label="Calorie"
          variant="outlined"
          margin="dense"
          onChange={(e) => setCal(e.target.value)}
          min="0"
        />
        {/* Edit  Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => onEdit(id, food, cal, edit, editClicked)}
        >
          Done
        </Button>
        {/* Cancel Button */}
        <Button
          variant="contained"
          color="secondary"
          onClick={() => editClicked((edit = false))}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default EditCalorie;
