import React from "react";

const Display = (props) => {
  const { result, operation } =  props;
  return (
    <div className="display">
      { result }
      <span className="operation">{ operation }</span>
    </div>
  )
};

export default Display;