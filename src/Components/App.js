import { PrintComponent } from "./PrintComponent";
import React, { useState, useRef, useEffect } from "react";
import ReactToPrint from "react-to-print";
import "../App.css";

const App = () => {
  const mockupLabel = {
    rawtext: "",
    dimensions: {
      width: 400,
      height: 50.8,
    },
    fontSize: 84,
    rotate: "norotate",
    jsx: (markup, rotate) => {
      return (
        <div>
          {markup.split("").map((letter) => (
            <span className={rotate}>{letter}</span>
          ))}
        </div>
      );
    },
  };
  const [flavor, setFlavor] = useState(mockupLabel);
  const componentRef = useRef();

  function handleFlavor(event) {
    setFlavor({
      ...flavor,
      rawtext: event.target.value,
      dimensions: {
        height: flavor.dimensions.height,
        width: event.target.value.length * 12.5,
      },
    });
  }
  function handleIncreaseFontSize() {
    setFlavor({
      ...flavor,
      fontSize: flavor.fontSize + 6,
    });
  }
  function handleDecreaseFontSize() {
    setFlavor({
      ...flavor,
      fontSize: flavor.fontSize - 6,
    });
  }
  function handleIncreasePageSize() {
    setFlavor({
      ...flavor,
      dimensions: {
        width: flavor.dimensions.width + 50,
        height: flavor.dimensions.height,
      },
    });
  }
  function handleDecreasePageSize() {
    setFlavor({
      ...flavor,
      dimensions: {
        width: flavor.dimensions.width - 50,
        height: flavor.dimensions.height,
      },
    });
  }
  function handleRotate() {
    if (flavor.rotate == "norotate") {
      setFlavor({
        ...flavor,
        rotate: "rotate",
      });
    } else {
      setFlavor({
        ...flavor,
        rotate: "norotate",
      });
    }
  }
  return (
    <div className="App">
      <h1>Label Maker for GH Processing</h1>
      <h3>Font Size: {flavor.fontSize}</h3>
      <h3>
        Page Size:{" "}
        {`width: ${flavor.dimensions.width}, height: ${flavor.dimensions.height}`}
      </h3>
      <input onChange={handleFlavor}></input>
      <ReactToPrint
        trigger={() => <button>Print</button>}
        content={() => componentRef.current}
        pageStyle={`@page { size: ${flavor.dimensions.width}mm ${flavor.dimensions.height}mm }`}
      />
      <button onClick={handleDecreaseFontSize}>Font Size -</button>
      <button onClick={handleIncreaseFontSize}>Font Size +</button>
      <button onClick={handleDecreasePageSize}>Page Size -</button>
      <button onClick={handleIncreasePageSize}>Page Size +</button>
      <button onClick={handleRotate}>Vertical</button>
      <PrintComponent flavor={flavor} ref={componentRef} />
    </div>
  );
};

export default App;
