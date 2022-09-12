import React from "react";
import "../Styles/PrintComponent.css";

export const PrintComponent = React.forwardRef((props, ref) => {
  const style = {
    "overflow-x": "scroll",
    overflow: "hidden",
    "font-size": props.flavor.fontSize,
  };
  function getMarkup() {
    return { __html: props.flavor.rawtext };
  }
  return (
    <div ref={ref} style={style} dangerouslySetInnerHTML={getMarkup()}></div>
  );
});
