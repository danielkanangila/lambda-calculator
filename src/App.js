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
  const [ result, setResult ] = useState(0);
  const [ equation, setEquation] = useState('');
  const [ operator, setOperator ] = useState(null);
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  const calculator = e => {
    const button = e.target.textContent;

    // Clear display by and reset state
      if (button === 'C') {
        clear();
      }

      if (numbers.includes(button) || operators.some(operator => operator.value === button)) {
        if (button === '=') {

          const res = _do(`${equation}${result}`);
          setResult(res);
          setEquation('') ;
          setOperator(null)
        } else {
           //if (hasResole) { setResult(result => result = button); } 
          if ((result === 0 && button === '-')) { 
            parseEqIfResultExists();
            setResult(result => result = button) 
          }
          else if ((button >= 0 && button <= 9) || button === '.') { 
            console.log(button)
            parseEqIfResultExists();
            setResult(result => 
              result = isNaN(button) ? `${result}${button}` : Number(`${result}${button}`)
            ) 
          }
          else {
              setOperator(operator => operator = button);
              const eq = equation + `${result} ${button} `;
              const end = eq.length - 2
              const rs = (isNaN(eq.slice(0, end))) ? _do(eq.slice(0, end)) : null;

              if (rs) {
                setEquation(equation => equation = `${eq.slice(0, end)} = ${rs}`);
              } else {
                setEquation(equation => equation = eq);
              }
              setResult(0)
          }
        }
      }
  }

  const parseEqIfResultExists = () => {
    if (equation.indexOf('=') !== -1) {
      const end = equation.length - 4
      setEquation(equation => 
        equation = `${equation.slice(0, end)}${operator}` 
      )
    }
  }

  const _do = equation => {
    try {
      return eval(equation)
    } catch {
      return 'ERROR';
    }
  }

 const clear = () => {
   setResult(0); setEquation(''); setOperator(null)
 }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
        <Display equation={equation} result={result}/>
        <ButtonGroup clickEventHandler={calculator} />
      </div>
    </div>
  );
}

export default App;
