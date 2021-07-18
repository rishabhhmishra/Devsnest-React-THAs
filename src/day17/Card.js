const Card = ({ food, calorie }) => {
  return (
    <div className="card">
      <h3>{food}</h3>
      <h4>you have consumed {calorie} cals today</h4>
    </div>
  );
};

export default Card;
