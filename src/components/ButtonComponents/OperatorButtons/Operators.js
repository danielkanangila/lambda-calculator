import React, { useState } from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorObjects] = useState(operators);
  return (
    <div className="btn btn-group btn-group--operators">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    
      { Object.entries(operatorObjects).map((entry, index) => 
        <OperatorButton key={index} operator={entry[1].value} />
      ) }
    </div>
  );
};

export default Operators;
