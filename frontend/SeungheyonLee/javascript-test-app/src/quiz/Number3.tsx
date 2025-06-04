export const Number3 = () => {
    const randomList = new Array(20)
    const resultList = new Array(5).fill(0)
    for (let i = 0; i < 20; i++) {
        randomList.push(Math.floor(Math.random() * (5 - 1 + 1)) + 1)
    }
    for(let random of randomList){
        for(let i=0;i<5;i++){
            if(random==(i+1)){
                resultList[i]+=1
            }
        }
    }

    let steps = [
        `random값 reduce결과: [${resultList.join(", ")}]`
    ]
    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <h3>Queue 예제</h3>
            <p>결과:</p>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>
                        {step}
                    </li>
                ))}
            </ul>
            <pre>
                {`
                    const randomList = new Array(20)
                    const resultList = new Array(5).fill(0)
                    for (let i = 0; i < 20; i++) {
                        randomList.push(Math.floor(Math.random() * (5 - 1 + 1)) + 1)
                    }
                    for(let random of randomList){
                        for(let i=0;i<5;i++){
                            if(random==(i+1)){
                                resultList[i]+=1
                            }
                        }
                    }
                `}
            </pre>
        </div>
    )
}
