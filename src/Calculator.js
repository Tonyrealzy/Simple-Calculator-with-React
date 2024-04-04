import './App.css';
import CalcButton from './components/CalcButton';
import React from 'react';

function Calculator() {
  const [calc, setCalc] = React.useState({
    current: '0',
    total: '0',
    isInitial: true,
    preOperation: ""
  }
   );

  function handleNumber(value) {
    let newValue = value;
    if (!calc.isInitial){
      newValue = calc.current + value;
    }
    setCalc({current: newValue, total: calc.total, isInitial: false, preOperation: calc.preOperation});
  }
  function handleOperator(value) {
    const total = doCalculation();
    setCalc({current: total.toString(), total: total.toString(), isInitial: true, preOperation: value});
  }
  function doCalculation() {
    let total = parseInt(calc.total);
    //calculation logic
    switch (calc.preOperation) {
      case '+':
        total += parseInt(calc.current);
        break;
      case '-':
        total -= parseInt(calc.current);
        break;
      case '*':
        total *= parseInt(calc.current);
        break;
      case '/':
        total /= parseInt(calc.current);
        break;
      default:
        total = parseInt(calc.current);
        break;
    }
    return total;
  }

  function renderDisplay() {
    return calc.current;
  }
  function clearScreen() {
    setCalc({
      current: '0',
      total: 0,
      isInitial: true,
    });
  }
  function renderResult() {
    let total = doCalculation();
    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOperation: '='
    });
  }

  return (
    <div>

      <div className="calculator">
      <section className='display'>{renderDisplay()}</section>

      <section className='buttonSection'>
        <CalcButton value="7" onClick={handleNumber}></CalcButton>
        <CalcButton value="8" onClick={handleNumber}></CalcButton>
        <CalcButton value="9" onClick={handleNumber}></CalcButton>
        <CalcButton className='operator' value="/" onClick={handleOperator}></CalcButton>

        <CalcButton value="4" onClick={handleNumber}></CalcButton>
        <CalcButton value="5" onClick={handleNumber}></CalcButton>
        <CalcButton value="6" onClick={handleNumber}></CalcButton>
        <CalcButton className='operator' value="*" onClick={handleOperator}></CalcButton>

        <CalcButton value="1" onClick={handleNumber}></CalcButton>
        <CalcButton value="2" onClick={handleNumber}></CalcButton>
        <CalcButton value="3" onClick={handleNumber}></CalcButton>
        <CalcButton className='operator' value="-" onClick={handleOperator}></CalcButton>

        <CalcButton  className='operator'value="C" onClick={clearScreen}></CalcButton>
        <CalcButton value="0" onClick={handleNumber}></CalcButton>
        <CalcButton  className='operator' value="=" onClick={renderResult}></CalcButton>
        <CalcButton className='operator' value="+" onClick={handleOperator}></CalcButton>
      </section>
      </div>

    </div>
  );
}

export default Calculator;
