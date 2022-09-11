import { PrintComponent } from "./PrintComponent";
import React, { useState, useRef, useEffect } from "react";
import ReactToPrint from "react-to-print";
import "../App.css";

const App = () => {
  const mockupLabel = {
    text: () => {
      return "";
    },
    rawtext: "",
    dimensions: {
      width: 0,
      height: 0,
    },
    fontSize: 96,
    rotate: false,
  };
  const [flavor, setFlavor] = useState(mockupLabel);
  const componentRef = useRef();
  function handleFlavor(event) {
    console.log(event.target.value);
    setFlavor({ ...flavor, rawtext: event.target.value }); /*
    const Markup = () => {
      <div>
        {flavor.rawtext.split("").map((letter) => {
          return <span>{letter}</span>;
        })}
      </div>;
    };
    setFlavor({
      ...flavor,
      text: Markup,
    });*/
  }
  function handleIncreaseSize() {
    setFlavor({
      ...flavor,
      fontSize: flavor.fontSize + 6,
    });
  }
  function handleDecreaseSize() {
    setFlavor({
      ...flavor,
      fontSize: flavor.fontSize - 6,
    });
  }
  function handleRotate() {
    console.log(flavor);
    if (flavor.rotate == 0) {
      setFlavor({
        ...flavor,
        rotate: 90,
      });
    } else {
      setFlavor({
        ...flavor,
        rotate: 0,
      });
    }
  }
  useEffect(() => {
    setFlavor(mockupLabel);
  }, []);
  return (
    <div className="App">
      <h1>Label Maker for GH Processing</h1>
      <h3>Font Size: {flavor.fontSize}</h3>
      <input onChange={handleFlavor}></input>
      <ReactToPrint
        trigger={() => <button>Print</button>}
        content={() => componentRef.current}
      />
      <button onClick={handleDecreaseSize}>-</button>
      <button onClick={handleIncreaseSize}>+</button>
      <button onClick={handleRotate}>Vertical</button>

      <PrintComponent flavor={flavor} ref={componentRef} />
    </div>
  );
};

export default App;
