import React from "react";

const OperatorButton = (props) => {
  const { operator , onoperatorclick } = props;
  return (
    <button onClick={onoperatorclick} className="btn btn-operator">
      {operator}
    </button>
  );
};

export default OperatorButton;
