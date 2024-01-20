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
    <div className="calculator">

      <div className="display">{renderDisplay(calc, setCalc)}</div>

      <CalcButton value="7" onClick={handleNumber}/>
      <CalcButton value="8" onClick={handleNumber}/>
      <CalcButton value="9" onClick={handleNumber}/>
      <CalcButton className="operator" value="/" onClick={handleOperator} />

      <CalcButton value="4" onClick={handleNumber}/>
      <CalcButton value="5" onClick={handleNumber}/>
      <CalcButton value="6" onClick={handleNumber}/>
      <CalcButton className="operator" value="*" onClick={handleOperator} />

      <CalcButton value="1" onClick={handleNumber}/>
      <CalcButton value="2" onClick={handleNumber}/>
      <CalcButton value="3" onClick={handleNumber}/>
      <CalcButton className="operator" value="-" onClick={handleOperator} />

      <CalcButton value="C" onClick={handleClear}/>
      <CalcButton value="0" onClick={handleNumber}/>
      <CalcButton value="=" onClick={handleOperator}/>
      <CalcButton className="operator" value="+" onClick={handleOperator} />
    </div>
    );    
}

export default App;