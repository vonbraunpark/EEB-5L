import React from "react";

//React에서 컴포넌트 만들기
//1. 일단 그냥 const를 작성
//2. 목적에 따라 작성할 녀석의 이름을 작성
//3. =() => {}를 작성
//4. Optional(선택적)하게 () 내에 뭔가 작성될 수 있음(파라미터,인자)
const HelloPropsTest = () => {
    const name = 'Vackend 10th'
    return<h1>안녕하세요, {name}!</h1>
}

export default HelloPropsTest