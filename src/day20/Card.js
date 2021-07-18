const Card = ({ food, calorie, onDelete, id }) => {
  const COLOR_CONDITION =
    calorie > 100 ? "red" : calorie > 50 ? "orange" : "green";

  return (
    <div className="card-wrapper">
      <div
        className="box"
        style={{
          backgroundColor: COLOR_CONDITION
        }}
      ></div>
      <div className="card">
        <h3>{food}</h3>
        <h4>
          you have consumed{" "}
          <span style={{ color: COLOR_CONDITION }}>{calorie}</span> cals today
        </h4>
        <button onClick={() => onDelete(id, food)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Card;
