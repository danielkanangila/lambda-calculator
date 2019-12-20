import React from "react";

const OperatorButton = (props) => {
  const { operator } = props;
  return (
    <div className="btn btn-operator">
      {operator}
    </div>
  );
};

export default OperatorButton;
