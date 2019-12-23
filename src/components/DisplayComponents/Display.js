import React from "react";

const Display = (props) => {
  const { equation, result } =  props;
  const hasError = () => {
    return (equation.indexOf('E') !== -1 || result === 'ERROR') ?
     ' error' : ''
  }
  return (
    <div className={ `display${hasError()}` }>
      { result }
      <span className={ `operation${hasError()}` }>{ equation }</span>
    </div>
  )
};

export default Display;