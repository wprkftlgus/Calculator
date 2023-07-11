import './App.css';
import {React} from 'react';
import {useState} from 'react';

function App() {
  const [calc, setCalc] = useState('');
  const [operCheck, setOperCheck] = useState(true);

  const getNum = (e) => {
    setCalc((prev) =>prev + e.target.value)
    setOperCheck(true);
  }
  const getOper = (e) => {
    if(operCheck){
    setCalc((prev) =>prev + e.target.value);
    setOperCheck(false);
    }
  }
  const allClear = () => {
    setCalc((prev)=>'');
  }
  const delCalc = () => {
    let str = (calc).slice(0, -1);
    setCalc((prev) => str);

    
  }
  const getResult = () => {
    
    let replace_str = calc.replace(/×/gi, "*").replace(/÷/gi, "/");

    if (isNaN(eval(replace_str))) {
      setCalc("");
    } else if (eval(replace_str) == Infinity) {
      alert("You can't devide as zero");
      setCalc("");
      return false;
    } 
    else if (calc[calc.length-1] == '+'){
      setCalc("");
      return false;
    }
    else if (eval(replace_str) == NaN){
      setCalc("");
      return false;
    }
      setCalc(() => eval(replace_str));
    
  };

  return (
    <body>
    <div className='back'>
    <div className='title'>CALCULATOR</div>
      <div class='calcontain'>
    <input class='inputBar'readOnly value={calc} />
    <div class='grid'>
    <button class='button' onClick = {allClear}>AC</button>
    <button class='button' onClick = {delCalc}>DEL</button>
    <button class='operButton' value={'%'} onClick={getOper}>%</button>
    <button class='operButton' value={'÷'} onClick={getOper}>/</button>
    <button class='button' value={7} onClick={getNum}>7</button>
    <button class='button' value={8} onClick={getNum}>8</button>
    <button class='button' value={9} onClick={getNum}>9</button>
    <button class='operButton' value={'×'} onClick={getOper}>×</button>
    <button class='button' value={4} onClick={getNum}>4</button>
    <button class='button' value={5} onClick={getNum}>5</button>
    <button class='button' value={6} onClick={getNum}>6</button>
    <button class='operButton' value={'-'} onClick={getOper}>-</button>
    <button class='button' value={1} onClick={getNum}>1</button>
    <button class='button' value={2} onClick={getNum}>2</button>
    <button class='button' value={3} onClick={getNum}>3</button>
    <button class='operButton' value={'+'} onClick={getOper}>+</button>
    <button class='button' value={0} onClick={getNum}>0</button>
    <button class='button' value={'.'}>.</button>
    <button class='operButton' value={'='} onClick={getResult}>=</button>
    </div></div>
    </div>
    </body>
  );
}

export default App;
