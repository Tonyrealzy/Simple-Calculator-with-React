import './App.css';
import React from 'react';


function App() {

  const [display, setDisplay] = React.useState(0);
  function handleNumber(value){
    alert('handle number click: ' + value);
    setDisplay(value);
  }
  
  function handleOperator(){}

  function CalcButton(props){
    return <button className={props.className} onClick={props.onClick(props.value)}>{props.value}</button>
  }
  
  return (
    <div className="calculator">

      <div className="display">{display}</div>

      <CalcButton value="7" onClick={handleNumber}/>
      <CalcButton value="8" onClick={handleNumber}/>
      <CalcButton value="9" onClick={handleNumber}/>
      <CalcButton className="operator" onClick={handleOperator} value="/" />

      <CalcButton value="4" onClick={handleNumber}/>
      <CalcButton value="5" onClick={handleNumber}/>
      <CalcButton value="6" onClick={handleNumber}/>
      <CalcButton className="operator" onClick={handleOperator} value="*" />

      <CalcButton value="1" onClick={handleNumber}/>
      <CalcButton value="2" onClick={handleNumber}/>
      <CalcButton value="3" onClick={handleNumber}/>
      <CalcButton className="operator" onClick={handleOperator} value="-" />

      <CalcButton value="C" />
      <CalcButton value="0" onClick={handleNumber}/>
      <CalcButton value="=" onClick={handleOperator}/>
      <CalcButton className="operator" onClick={handleOperator} value="+" />
    </div>
  );
}

export default App;
