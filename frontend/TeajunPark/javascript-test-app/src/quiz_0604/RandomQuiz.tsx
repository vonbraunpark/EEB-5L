export const RandomQuiz = () => {

    let numbers: number[] = []
    for (let i = 0; i < 20; i++) {
        numbers.push(Math.floor(Math.random() * 5) + 1)
        numbers.reduce((acc, num) => acc + num, 0)
    }

    let steps = [
        `초기 배열에 push()로 추가된 값들: [${numbers.join(", ")}]`
    ]

    // let remove = numbers.shift()

    let count1 = 0
    let count2 = 0
    let count3 = 0
    let count4 = 0
    let count5 = 0

    for(let j = 0; j < 20; j++) {
        if (numbers[j] == 1) {
            count1++
        } else if (numbers[j] == 2) {
            count2++
        } else if (numbers[j] == 3) {
            count3++
        } else if (numbers[j] == 4) {
            count4++
        } else if (numbers[j] == 5) {
            count5++
        }
    }

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <h3> RandomQuiz </h3>
            <p> 결과:</p>
            <p> 결과: {numbers}</p>
            <p> 1반복: {count1}</p>
            <p> 2반복: {count2}</p>
            <p> 3반복: {count3}</p>
            <p> 4반복: {count4}</p>
            <p> 5반복: {count5}</p>

            <ul>
                {steps.map((step, index) => (
                    <li key={index}>
                        {step}
                    </li>
                ))}
            </ul>
            <pre>
            {`
                numbers.RandomQuiz();
            `}
        </pre>
        </div>
    )
}