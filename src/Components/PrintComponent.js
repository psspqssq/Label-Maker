import React from "react";
import "../Styles/PrintComponent.css";

export const PrintComponent = React.forwardRef((props, ref) => {
  const style = {
    "overflow-x": "scroll",
    overflow: "hidden",
    "font-size": props.flavor.fontSize,
  };
  return (
    <div ref={ref} style={style}>
      {props.flavor.text()}
    </div>
  );
});
