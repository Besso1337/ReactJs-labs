import React, {useState} from 'react'
function Chislo(props) {
    const [count, setCount] = useState(props.chisla.initial);
    function Increment() {
        if (count < props.chisla.max) {
            setCount(count + 1);}}
    function Decrement() {
        if (count > props.chisla.min) {
            setCount(count - 1);}}
    function Reset() {
        setCount(props.chisla.initial)}
    return (
        <div>
            <p>Поточний рахунок {count}</p>
            <button onClick = {Increment}>+</button>
            <button onClick = {Decrement}>-</button>
            <button onClick = {Reset}>Reset</button>
        </div>);}
export default Chislo;