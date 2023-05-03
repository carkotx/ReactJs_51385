import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const [count, setCount] = useState(0)
  let mensajito = 'Te pasaste!'
  
  return ( 
    
    < div className = "App" >

    <h1 > {count < 10 ? count : mensajito} </h1>


    <button onClick = {() => setCount(count + 1)} > + </button> 
    </div>
  );
  }


export default App;
