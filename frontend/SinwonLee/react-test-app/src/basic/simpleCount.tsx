import  React,{useState}from 'react';

const simpleCount=()=>{
    const [count,setCount]=useState(0);
    return (
        <div>
            <h1>simple count</h1>
            <p>현재 값 :{count}</p>
            <button onClick={()=>setCount(count+1)}>+ </button>
            <button onClick={()=>setCount(count-1)}>- </button>
        </div>
)
}
export default simpleCount