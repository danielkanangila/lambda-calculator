import React, { useState } from "react";
import "./App.scss";
import Display from "./components/DisplayComponents/Display"
import ButtonGroup from "./components/ButtonComponents/ButtonGroup";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import { numbers, operators } from "./data";

function App() {
  const [ result, setResult ] = useState('0');
  const [operation, setOperation] = useState('');
  const [ x, setX ] = useState(null);
  const [ y, setY ] = useState(null);
  const [ operator, setOperator ] = useState(null);
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const calculator = e => {
    const btnContent = e.target.textContent;

    // Clear display by and reset state
    if (btnContent === 'C') {
      reset();
    }

    if (numbers.includes(btnContent) && 
      y === null && operator === null) {
      setDisplay(btnContent);
    }

    if (operators.some(operator => operator.value === btnContent) && btnContent !== '=') {
       if (!x && !operator) {
         setOperator(operator => operator = btnContent)
         setX(x => x = Number(result))
         setOperation(operation => operation += `${result} ${btnContent}`)
         setResult('0');
       }
    }
    
  }

  const reset = () => {
    setResult('0'); setX(null); setY(null);
    setOperator(null); setOperation('')
  }

  const setDisplay = input => {
    if (result.length < 10 ) {
      setResult(result => 
        result = (Number(result) === 0) ? input :`${result}${input}`
      );
    } 
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display operation={operation} result={result}/>
        <ButtonGroup clickEventHandler={calculator} />
      </div>
    </div>
  );
}

export default App;
