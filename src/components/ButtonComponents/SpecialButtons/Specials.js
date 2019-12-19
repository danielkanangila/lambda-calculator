import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";

//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [ specialCharArr ] = useState(specials);
  return (
    <div className="specials-btn-group">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      { specialCharArr.map((specialChar, index) => 
        <SpecialButton key={index} btnContent={specialChar} />
      )}
    </div>
  );
};

export default Specials;
