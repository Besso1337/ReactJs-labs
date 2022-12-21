import React, {useState} from "react";
function Korzina({props, setSum, setCount}){
    const [count, setCount2] = useState(0);
    function Increment() {
            setCount2(count + 1);
            setSum(prev => prev + props.price);
            setCount(prev => prev + 1);}
    function Decrement() {
        if (count > 0) {
            setCount2(count - 1);
            setSum(prev => prev - props.price);
            setCount(prev => prev - 1);}}
    return(
        <div key = {props.id}>
            <table className = {"CartTable"}>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.price}</td>
                    <td>
                        <button onClick = {Increment}>+</button>
                        {count}
                        <button onClick = {Decrement}>-</button>
                    </td>
                    <td>{props.price*count}</td>
                </tr>
            </table>
        </div>);}
export default Korzina;