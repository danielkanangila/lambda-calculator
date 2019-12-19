import React from "react";

const NumberButton = (props) => {
  const { btnContent, index } = props

  return (
    <button className={`btn btn-number btn-number--${index}`}>
      { btnContent }
    </button>
  );
};

export default NumberButton;
