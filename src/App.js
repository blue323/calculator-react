import React, { useState } from 'react'
import './App.css';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('0')

  function handleClear() {
    setInput('0')
  }

 function handleInput(e) {
  let toArray = input.split(' ')
  const lastItem = toArray[toArray.length - 1]
  if(lastItem === '0' && e.target.innerHTML === '0') {
    console.log('You already have a 0', lastItem)
  } else if(lastItem === '0' && e.target.innerHTML !== '0'){
    toArray.pop()
    toArray.push(e.target.innerHTML)
    let newInput = toArray.join(' ')
    setInput(newInput)
  } else {
    setInput(previousInput => previousInput.concat(e.target.innerHTML))
  }
 }

 function handleOperator(e) {
  let toArray = input.split('')
  let lastItem = toArray[toArray.length - 1]
  if(lastItem !== '/' && lastItem !== '*' && lastItem !== '+' && lastItem !== '-') {
    setInput(previousInput => previousInput.concat(` ${e.target.value}`))
  } else if(((lastItem === '/' || lastItem === '*' || lastItem === '+') && e.target.value !== '-')) {
    toArray.pop()
    toArray.push(e.target.value)
    let newInput = toArray.join('')
    setInput(newInput)
  } else if(((lastItem === '/' || lastItem === '*' || lastItem === '+') && e.target.value === '-')) {
    lastItem += e.target.value
    toArray.pop()
    toArray.push(lastItem)
    let newInput = toArray.join('')
    setInput(newInput)
  } else {
    console.log(toArray, lastItem , 'last case')
    toArray.pop()
    toArray.pop()
    toArray.push(e.target.value)
    let newInput = toArray.join('')
    setInput(newInput)
  }
 }

 function handleOperation() {
  const r = evaluate(input).toString()
  setInput(r)
 }

 function handleDecimal(e) {
  const toArray = input.split(' ')
  const lastItem = toArray[toArray.length - 1]
  if(!lastItem.includes(e.target.innerHTML)){
    setInput(previousInput => previousInput.concat(e.target.innerHTML))
  }
 }

  return (
    <div className='App' >
      <div id='machine'>
      <div id='display'>{input}</div>
      <div className="inputs">
        <button className= "AC" id= "clear" onClick={handleClear}>AC</button>
        <button className= 'operation' id= "divide" value = '/' onClick={handleOperator}>/</button>
        <button className= 'operation' id = "multiply" value = '*' onClick={handleOperator}>x</button>
        <button className= 'number' id= "seven" onClick={handleInput}>7</button>
        <button className= 'number' id= "eight" onClick={handleInput}>8</button>
        <button className= 'number' id= "nine" onClick={handleInput}>9</button>
        <button className= 'operation'id= "subtract" value = '-' onClick={handleOperator}>-</button>
        <button className= 'number' id = "four" onClick={handleInput}>4</button>
        <button className= 'number' id = "five" onClick={handleInput}>5</button>
        <button className= 'number' id = "six" onClick={handleInput}>6</button>
        <button className= 'operation' id="add" value = '+' onClick={handleOperator}>+</button>
        <button className= 'number' id = "one" onClick={handleInput}>1</button>
        <button className= 'number' id = "two" onClick={handleInput}>2</button>
        <button className= 'number' id = "three" onClick={handleInput}>3</button>
        <button className= 'equal' id = "equals" onClick={handleOperation}>=</button>
        <button className= 'number' id = "zero" onClick={handleInput}>0</button>
        <button className= 'number' id = "decimal" onClick={handleDecimal}>.</button>
      </div>
      </div>
    </div>
  )
}

export default App;