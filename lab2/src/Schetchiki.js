import React, {useState} from 'react'
function Schetchiki(props) {
    const [count, setCount] = useState(props.initials);
    function Increments() {
        if (count < props.max) {
            setCount(count + 1);}}
    function Decrements() {
        if (count > props.min) {
            setCount(count - 1);}}
    function Resets() {
        setCount(props.initials)}
    return (
        <div>
            <p>Поточний рахунок {count}</p>
            <button onClick={Increments}>+</button>
            <button onClick={Decrements}>-</button>
            <button onClick={Resets}>Reset</button>
        </div>);}
export default Schetchiki;
