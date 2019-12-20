import React from "react";

const NumberButton = (props) => {
  const { btnContent, index, onnumberclick } = props

  return (
    <button
      onClick={onnumberclick}
     className={`btn btn-number btn-number--${index}`}>
      { btnContent }
    </button>
  );
};

export default NumberButton;
