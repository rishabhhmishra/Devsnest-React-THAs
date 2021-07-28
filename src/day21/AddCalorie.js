import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > form": {
      margin: theme.spacing(1),
      width: "20ch"
    }
  }
}));

const AddCalorie = ({ addEntry }) => {
  const classes = useStyles();

  const [food, setFood] = useState("");
  const [cal, setCal] = useState("");

  return (
    <div className="add-calorie">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          className="input"
          type="text"
          label="Food Name"
          variant="outlined"
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
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => addEntry(food, cal)}
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddCalorie;
