import React from "react";

const Display = (props) => {
  const { equation, result } =  props;
  return (
    <div className="display">
      { result }
      <span className="operation">{ equation }</span>
    </div>
  )
};

export default Display;