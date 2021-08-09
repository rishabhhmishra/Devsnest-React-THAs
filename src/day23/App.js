import "./styles.css";

import React from "react";

import MouseMove from "./useEventListner/MouseMove";
import Carousal from "./carousal/Carousal";
import Navbar from "./darkMode/Navbar";

const App = () => {
  return (
    <div className="day23">
      <Navbar />
      <MouseMove />
      <Carousal />
    </div>
  );
};

export default App;
