import './App.css';
import {React} from 'react';
import {useState} from 'react';

function App() {
  const [calc, setCalc] = useState('');
  const [operCheck, setOperCheck] = useState(true);
  const [result, setResult] = useState('');
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
    setResult((prev)=>'');
  }
  const delCalc = () => {
    let str = (calc).slice(0, -1);
    setCalc((prev) => str);
  }
  const getResult = () => {
    if (/[\+\-\×\÷\*/%]$/.test(calc.trim())) {
  return false;
  }   
    let replace_str = calc.replace(/×/gi, "*").replace(/÷/gi, "/");

  try{
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
      setResult(() => eval(replace_str));
    
  } catch(err){
    setCalc("");
    setResult("");
  }
  }

  return (
    <body>
    <div className='back'>
    <div className='top-titles'>
    <div className='title1'>Sihyeon's </div>
    <div className='title2'>Calculator</div>
    </div>
    <div className='calcontain'>
    <div className='holder-top'>
    <div className='network'></div>
    <div className='wifi'></div>
    <div className='battery'></div>
    </div>
    <div className='holder-inputAndResult'>
    <input className='inputBar'readOnly value={calc} />
    <input className='resultBar'readOnly value={result} />
    </div>
    <div class='grid'>
    <button className='button-top' onClick = {allClear}>AC</button>
    <button className='button-top' onClick = {delCalc}>DEL</button>
    <button className='button-top' value={'%'} onClick={getOper}>%</button>
    <button className='operButton' value={'÷'} onClick={getOper}>/</button>
    <button className='button' value={7} onClick={getNum}>7</button>
    <button className='button' value={8} onClick={getNum}>8</button>
    <button className='button' value={9} onClick={getNum}>9</button>
    <button className='operButton' value={'×'} onClick={getOper}>×</button>
    <button className='button' value={4} onClick={getNum}>4</button>
    <button className='button' value={5} onClick={getNum}>5</button>
    <button className='button' value={6} onClick={getNum}>6</button>
    <button className='operButton' value={'-'} onClick={getOper}>-</button>
    <button className='button' value={1} onClick={getNum}>1</button>
    <button className='button' value={2} onClick={getNum}>2</button>
    <button className='button' value={3} onClick={getNum}>3</button>
    <button className='operButton' value={'+'} onClick={getOper}>+</button>
    <button className='button' value={0} onClick={getNum}>0</button>
    <button className='button' value={"."} onClick={getOper}>.</button>
    <button className='operButton' value={'='} onClick={getResult}>=</button>
    </div>
    <div className='holder-white'>
    <div className='white'></div>
    </div>
    </div>
    </div>
    </body>
  );
}

export default App;
