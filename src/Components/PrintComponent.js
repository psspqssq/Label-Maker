import React from "react";
import "../Styles/PrintComponent.css";

export const PrintComponent = React.forwardRef((props, ref) => {
  const style = {
    "overflow-x": "scroll",
    overflow: "hidden",
    "font-size": props.flavor.fontSize,
    "min-width": "25px",
    "background-color": "yellow",
    width: "auto",
  };
  function getMarkup() {
    return { __html: props.flavor.rawtext };
  }
  return (
    <div ref={ref} style={style}>
      {props.flavor.jsx(props.flavor.rawtext, props.flavor.rotate)}
    </div>
  );
});
