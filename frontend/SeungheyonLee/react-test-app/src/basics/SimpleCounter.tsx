import React,{useState} from "react";

//1. const 작성
//2. 목적에 따라 작성할 녀석의 이름을 작성
//3. =() => {}을 작성
//4. Optional(선택적)하게 () 소괄호 내에 뭔가 작성 될 수 있음(파라미터,인자)

const SimpleCounter=()=>{
    const[count,setCount]=useState(0);

    return (
        <div>
            <h1>SimpleCounter</h1>
            <p>현재 값: {count}</p>
            <button onClick={() => setCount(count+1)}>+</button>
            <button onClick={() => setCount(count-1)}>-</button>
        </div>
    )
}

//export default SimpleCounter는
//외부에서 SimpleCounter를 볼 수 있도록 만들었음을 의미
//다른 소스 코드에서 import등으로 재사용 할 수 있게 만들겠다는 뜻
export default SimpleCounter;