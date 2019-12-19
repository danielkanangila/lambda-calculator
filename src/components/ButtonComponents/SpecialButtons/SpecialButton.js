import React from "react";

const SpecialButton = (props) => {
  const { btnContent } = props;
  return (
    <button className="btn special-bnt">
      { btnContent }
    </button>
  );
};

export default SpecialButton;
