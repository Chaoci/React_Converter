import React,{useState}from 'react';
import CardFooter from './Components/CardFooter';
import UnitControl from './Components/UnitControl';
import UnitConverter from './Components/UnitConverter';


import './App.css';

function App() {
  const [inputValue, setInputValue] = useState(0)
  const numberHandler = (e)=>{
      const {value} = e.target;
      setInputValue(value);
  };
  return (
    <div className="container">
      <div className="card-header">Network Speed Converter</div>
      <div className="card-body">
        <UnitControl />
        <UnitConverter inputValue={inputValue} numberHandler={numberHandler}/>
      </div>
      <CardFooter inputValue={inputValue} />
</div>
  );
}

export default App;
