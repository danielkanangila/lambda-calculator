import React from "react";

const SpecialButton = (props) => {
  const { btnContent, onspecialclick } = props;
  return (
    <button onClick={onspecialclick} className="btn btn-special">
      { btnContent }
    </button>
  );
};

export default SpecialButton;
