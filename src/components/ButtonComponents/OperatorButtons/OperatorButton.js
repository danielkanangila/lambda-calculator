import React from "react";

const OperatorButton = (props) => {
  const { operator } = props;
  return (
    <button className="btn btn-operator">
      {operator}
    </button>
  );
};

export default OperatorButton;
