import './App.css';
import React from 'react';
import {CalcButton, handleNumber, handleOperator, renderDisplay, handleClear} from './myFunctions.js';


function App() {

  const [calc, setCalc] = React.useState({
    current: "0",
    total:"0",
    isInitial: true,
    preOp: ""
  });
  
  return (
    <div className='calc-container'>
      <div className="calculator">

        <div className="display">{renderDisplay(calc, setCalc)}</div>

        <CalcButton value="7" onClick={() => handleNumber("7", calc, setCalc)}/>
        <CalcButton value="8" onClick={() => handleNumber("8", calc, setCalc)}/>
        <CalcButton value="9" onClick={() => handleNumber("9", calc, setCalc)}/>
        <CalcButton className="operator" value="/" onClick={() => handleOperator("/", calc, setCalc)} />

        <CalcButton value="4" onClick={() => handleNumber("4", calc, setCalc)}/>
        <CalcButton value="5" onClick={() => handleNumber("5", calc, setCalc)}/>
        <CalcButton value="6" onClick={() => handleNumber("6", calc, setCalc)}/>
        <CalcButton className="operator" value="*" onClick={() => handleOperator("*", calc, setCalc)} />

        <CalcButton value="1" onClick={() => handleNumber("1", calc, setCalc)}/>
        <CalcButton value="2" onClick={() => handleNumber("2", calc, setCalc)}/>
        <CalcButton value="3" onClick={() => handleNumber("3", calc, setCalc)}/>
        <CalcButton className="operator" value="-" onClick={() => handleOperator("-", calc, setCalc)} />

        <CalcButton className='clear' value="C" onClick={() => handleClear(calc, setCalc)}/>
        <CalcButton value="0" onClick={() => handleNumber("0", calc, setCalc)}/>
        <CalcButton value="=" onClick={() => handleOperator("=", calc, setCalc)}/>
        <CalcButton className="operator" value="+" onClick={() => handleOperator("+", calc, setCalc)} />
      </div>

    </div>
    );    
}

export default App;