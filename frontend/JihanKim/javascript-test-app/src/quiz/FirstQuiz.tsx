export const FirstQuiz = () => {
    let randomArray = []
    let result = []
    for (let i = 0; i < 5; i++) {
        let randomNum = Math.floor(Math.random() * 100) + 1;
        if (randomNum % 2 == 0) {
            randomArray.push(randomNum)
            result.push(`${randomNum}:짝수입니다. 해당 숫자를 배열에 넣습니다.`)
        } else {
            if (randomArray.length == 0) {
                result.push(`${randomNum}:홀수입니다. 배열에서 제거할 숫자가 없습니다.`)
            } else {
                randomArray.shift()
                result.push(`${randomNum}:홀수입니다. 배열에서 첫 번째 숫자를 제거합니다.`)
            }
        }
        result.push(`현재 배열[${[...randomArray]}]`)
    }

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <ul>
                {result.map((rs, index) => (
                    <li key={index}>
                        {rs}
                    </li>
                ))}
            </ul>
            <br/>
            <p>최종 배열:[{randomArray.join(", ")}]</p>
        </div>
    )
}