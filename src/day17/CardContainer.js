import Card from "./Card";

const CardContainer = (props) => {
  return (
    <div className="card-container">
      <Card food="Oats" calorie="389" />
      <Card food="4 Boiled Eggs" calorie="312" />
      <Card food="Bread butter" calorie="142" />
      <Card food="Pizza" calorie="55" />
      <Card food="Burger" calorie="100" />
      <Card food="Samosa" calorie="63" />
    </div>
  );
};

export default CardContainer;
