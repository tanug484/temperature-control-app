import './App.css';
import {useState,useEffect} from 'react'
function App() {
  const [count,setCount]= useState(10);
  const [color,setColor]=useState('cold')
  const handleIncrement=()=>{
    setCount(count+1);
    if(count>=30)
    {
      alert("The temprature cannot increase more that that..😁")
      setCount(10);
    
    }
      setColor('cold')
    if(count>=15)
    {
      setColor('hot')
    }
  }
  const handleDecrement=()=>{
     setCount(count-1)
    if(count<=-3)
    {
      alert('The temprature cannot decrease more than this..😆')
      setCount(10)
    }
    if(count<=16)
    {
      setColor('cold')
    }
  }
  return <>

 <div className='component-app'>
   <div className={`temp ${color}` }>
     <h1 className='count'>{count}<sup>o</sup>C</h1>
   </div>
   <button className=' increment' onClick={handleIncrement}><b>+</b></button>
   <button className=' decrement'  onClick={handleDecrement}><b>-</b></button>
 </div>
  </>
}

export default App;