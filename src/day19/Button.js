import { useState } from "react";

// whenever this component is called, each call will have its own state starting from 0
const Button = () => {
  let [value, setValue] = useState(0);

  let handleCount = () => {
    setValue((prevCount) => {
      // the prevCount here is the {value}
      return prevCount + 1;
    });
  };

  return <button onClick={handleCount}>{value}</button>;
};

export default Button;
