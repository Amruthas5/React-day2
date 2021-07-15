import React, { useState } from 'react';
import "./style.css";


const App=()=>{
  let[score,setScore] =  useState(0)
  return(
 <div>
   <h1>Hey this is my counter</h1>
   <h1>Value of score is {score}</h1>
   <button onClick={()=>(score<25 ?setScore(score+1) : "")}>Increment</button>
   <button onClick={()=>{setScore(score-1)}}>Decrement</button>
   <button onClick={()=>{setScore(0)}}>Reset</button>
 </div>
  )
}

export default App;
