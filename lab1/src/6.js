import {useState} from "react";
function Six() {
    const [color, setColor] = useState({color:'red'});
    return(<div>
        <p style={color}>Color</p>
        <select onChange={(event) => setColor({color: `${event.target.value}`})} value={color}>
            <option value='red' >red</option>
            <option value='green'>green</option>
            <option value='blue' >blue</option>
        </select>
    </div>)}
export default Six;