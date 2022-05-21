import React, { Fragment } from 'react'

function Counter() {

//hooks use useState
let  [count,setCount]=React.useState(10);


const increament=()=>{
    setCount(count+1)
    console.log(count)

}

const decrement=()=>{
    if(count>0){
    setCount(count-1);
    }
    
}
const double=()=>{
    setCount(count*2)
}








  return (
    <>
    <div>
        <h1 style={{color:count%2===0 ? "green":"red"}} >Counter App:{count}</h1>
       
        <button onClick={increament} >Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={double}>Double</button>
        </div>
    </>
  );
}

export default Counter;