import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [input,setInput] = useState('');
  let [result,setResult] = useState();

  let hanlder = s  =>{
      setInput(s.target.value);
  }

  return (
    <div className="App">
      <div className='cal'>
      <h1>Calculator</h1>
      <input type='text' placeholder='0' value={input} name='input' onChange={hanlder}></input>
      <br/>
      <h2>Result : {result}</h2>
      <button onClick={()=> setInput('')}>C</button>
      <button onClick={()=> setInput(input+9)}>9</button>
      <button onClick={()=> setInput(input+8)}>8</button>
      <button onClick={()=> setInput(input+7)}>7</button>
      <button onClick={()=> setInput(input+6)}>6</button>
      <button onClick={()=> setInput(input+5)}>5</button>
      <button onClick={()=> setInput(input+4)}>4</button>
      <button onClick={()=> setInput(input+3)}>3</button>
      <button onClick={()=> setInput(input+2)}>2</button>
      <button onClick={()=> setInput(input+1)}>1</button>
      <button onClick={()=> setInput(input+'+')}>+</button>
      <button onClick={()=> setInput(input+'-')}>-</button>
      <button onClick={()=> setInput(input+'*')}>*</button>
      <button onClick={()=> setInput(input+'/')}>/</button>
      <button onClick={()=> setInput(input+'%')}>%</button>
      <button className='clear' onClick={()=> setInput('')}>Clear</button>
      <button className='total' onClick={()=>{ setResult (eval(input))}}>=</button>
      </div>
      </div>
   
  );
}

export default App;
