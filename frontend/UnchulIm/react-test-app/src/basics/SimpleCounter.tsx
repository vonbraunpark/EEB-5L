import React, {useState} from "react";

const SimpleCounter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h1>SimpleCounter</h1>
            <p>현재 값: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

//export default SimpleCounter는 외부에서 SimpleCounter 를 볼 수 있도록 만들었음을 의미
//다른 소스 코드에서 import 등으로 재사용 할 수 있게 만들겠다는 뜻
export default SimpleCounter