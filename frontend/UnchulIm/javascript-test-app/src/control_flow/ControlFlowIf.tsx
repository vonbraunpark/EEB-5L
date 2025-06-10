export const ControlFlowIf = () => {
    let x = 10
    let result
    if (x > 5) {
        result = "x는 5 보다 큽니다."
    } else {
        result = "x는 5 보다 작거나 같습니다."
    }
    let ternaryResult = x > 5 ? "x는 5 보다 큽니다." : "x는 5 보다 작거나 같습니다."

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <h3>if-else 와 삼항 연산자</h3>
            <p>if-else 결과: {result}</p>
            <p>삼항 연산자 결과: {ternaryResult}</p>
            <pre>
                {`
                    x = ${x}
                
                    if (x > 5) {
                        result = "x는 5 보다 큽니다."
                    } else {
                        result = "x는 5 보다 작거나 같습니다."
                    }
                    
                    삼항 연산자의 구조 -> 조건 ? 참인 경우 선택 : 거짓인 경우 선택
                    // ${ternaryResult}
                `}
            </pre>
        </div>
    )
}