import './App.css';
import Chislo from "./Schet1";
import Forma from "./Forma";
import Spisok from "./Spisok";
import Korzina from "./Korzina";
import {useState} from "react";
import Schetchiki from "./Schetchiki";
function App() {
    const chisla = {initial: 0, min: -10, max: 10}
    const schet = [
        {id: 1, initials: 6, min: -20, max: 20},
        {id: 2, initials: 7, min: -30, max: 10},
        {id: 3, initials: 8, min: -50, max: 40}]
    const items = [
        {
            id: 1,
            name: "One",
            price: 100,
            min: 0},
        {
            id: 2,
            name: "Two",
            price: 200,
            min: 0},
        {
            id: 3,
            name: "Three",
            price: 300,
            min: 0}];
    const [sum, setSum] = useState(0);
    const [count, setCount] = useState(0);
    const [productlist, setProd] = useState([])
    function plusProducts(input){
        if(input){
            const newProduct = {
                id: Math.random(),
                prod: input}
            setProd([...productlist, newProduct])}}
    function remuveProducts(id){
        setProd([...productlist.filter((product) => product.id !== id)])}
  return (
    <div>
      <div>1.1</div>
      <div><Chislo chisla = {chisla}/></div>
        <div>1.2</div>
        <div>
            <Schetchiki initials = {schet[0].initials} min = {schet[0].min} max = {schet[0].max}></Schetchiki>
            <Schetchiki initials = {schet[1].initials} min = {schet[1].min} max = {schet[1].max}></Schetchiki>
            <Schetchiki initials = {schet[2].initials} min = {schet[2].min} max = {schet[2].max}></Schetchiki>
        </div>
        <div>2</div>
        <div>
            <Forma plusProducts = {plusProducts}/>
            {productlist.map((product) => {
                return(
                    <Spisok
                        prod = {product}
                        key = {product.id}
                        remuveProducts = {remuveProducts}/>);})}
        </div>
        <div>3</div>
        <div>
            {items.map((props)=>
                <div key={props.id}>
                    <Korzina setSum = {setSum} setCount = {setCount} props = {props}/>
                </div>)}
                        <p>Total count {count}</p>
                        <p>Total price {sum}</p>
        </div>
    </div>);}
export default App;
