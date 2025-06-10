import React from "react";

//1. const 작성
//2. 목적에 따라 작성할 녀석의 이름을 작성
//3. =() => {}을 작성
//4. Optional(선택적)하게 () 소괄호 내에 뭔가 작성 될 수 있음(파라미터,인자)
const HelloPropsTest=()=>{
    const name= 'Backend 10th'
    return <h1>Hello {name}</h1>;
}
export default HelloPropsTest;