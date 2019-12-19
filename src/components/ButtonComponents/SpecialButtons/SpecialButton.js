import React from "react";

const SpecialButton = (props) => {
  const { btnContent } = props;
  return (
    <button className="btn btn-special">
      { btnContent }
    </button>
  );
};

export default SpecialButton;
