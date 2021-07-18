import Box from "./Box";

const Row = () => {
  const n = 8;
  return (
    <div className="row">
      {[...Array(n)].map((item, idx) => (
        <Box key={idx} />
      ))}
    </div>
  );
};

export default Row;
