export function CalcButton(props){
    return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>

    // return <button className={props.className} onClick={props.onClick(props.value)}>{props.value}</button>
  }


 export function handleNumber(value, calc, setCalc){
    let newValue = value;

    if (!calc.isInitial){
      newValue = calc.current + value;
    }

    setCalc({
        current: newValue,
        total: calc.total,
        isInitial: false,
        preOp: calc.preOp});
  }
  

  export function handleOperator(value, calc, setCalc) {
    if (calc.isInitial) {
        setCalc({...calc, preOp: value});
    }
    else {
    const result = doCalculation(calc);
    setCalc({
        current: result.toString(),
        total: result.toString(),
        isInitial: true, 
        preOp: value,
    });
  }
}


  export function doCalculation(calc) {
    const current = parseFloat(calc.current);
    const total = parseInt(calc.total);

    switch(calc.preOp) {
        case "+":
            return total + current;
        case "-" :
            return total - current;
        case "*":
            return total * current;
        case "/":
            return total / current;
        default:
            return current;
    }
  }


  export function renderDisplay (calc, setCalc) {
    return <div className="display">{calc.current}</div>;
  }


  export function handleClear(calc, setCalc) {
    setCalc({
        current: "0",
        total:"0",
        isInitial: true,
        preOp: ""
    });
  }