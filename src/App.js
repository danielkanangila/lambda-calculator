import React, { useState } from "react";
import "./App.scss";
import Display from "./components/DisplayComponents/Display"
import ButtonGroup from "./components/ButtonComponents/ButtonGroup";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import { numbers } from "./data";

function App() {
  const [ result, setResult ] = useState(0);
  const [ x, setX ] = useState(0);
  const [ y, setY ] = useState(0);
  const [ operator, setOperator ] = useState(null);
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const calculator = e => {
    const actionContent = e.target.textContent;

    // Clear display by and reset state
    if (actionContent === 'C') {
      setResult(0); setX(0); setY(0); setOperator(null)
    }

    if (numbers.includes(actionContent) && 
      y === 0 && operator === null) {

      console.log(actionContent)
      setX(x => x = `${x}${actionContent}`);
      setResult(result => result = Number(x));
    }
    
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display result={result}/>
        <ButtonGroup clickEventHandler={calculator} />
      </div>
    </div>
  );
}

export default App;
