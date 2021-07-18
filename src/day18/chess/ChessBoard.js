import Row from "./Row";

const Chess = () => {
  const n = 8;

  return (
    <div className="board ">
      {[...Array(n)].map((item, idx) => (
        <Row key={idx} />
      ))}
    </div>
  );
};

export default Chess;
