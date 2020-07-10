import React, { useState } from "react";
import AnimateHeight from "react-animate-height";

import "./styles.css";

const App = () => {
  const [height, setHeight] = useState(0);
  const handleShowHide = () => {
    setHeight(height === 0 ? "auto" : 0);
  };
  return (
    <div className="App">
      <div data-testid="disclaimer" className="disclaimer">
        <button
          className="link___3I7HD title___3-8Go blue___1gK0H"
          data-testid="link"
          onClick={handleShowHide}
        >
          Important offers, pricing details, &amp; disclaimers
        </button>

        <AnimateHeight
          duration={250}
          height={height} // see props documentation below
        >
          <div className={`details `}>Sample data</div>
        </AnimateHeight>
      </div>
    </div>
  );
};
export default App;
