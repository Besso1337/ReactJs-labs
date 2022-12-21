import './App.css';
import One from './1';
import Two from './2';
import Three from './3';
import Four from './4';
import Five from './5';
import Six from './6';
function App() {
    const name = "Yaroslav";
    const surname = "Palamarchuk";
    const occupation = "Student";
     return (
         <div>
             <div>
                 <div>1</div>
                 <One name = {name} surname = {surname}/>
             </div>
             <div>
                 <div>2</div>
                 <Two name = {name} surname = {surname} occupation = {occupation}/>
             </div>
             <div>
                 <div>3</div>
                 <Three surname = {surname}/>
             </div>
             <div>
                 <div>4</div>
                 <Four/>
             </div>
             <div>
                 <div>5</div>
                 <Five />
             </div>
             <div>
                 <div>6</div>
                 <Six />
             </div>
         </div>);}
export default App;
