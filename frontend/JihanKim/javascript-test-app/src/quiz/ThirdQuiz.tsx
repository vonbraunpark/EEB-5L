export const ThirdQuiz = () => {
    let randomArray = []
    for (let i = 0; i < 20; i++) {
        randomArray.push(Math.floor(Math.random() * 5) + 1)
    }
    let result = []
    for (let i = 1; i <= 5; i++) {
        result.push(`${i}: ${randomArray.filter(num => num == i).length}개`)
    }


    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <p>결과:</p>
            <p>{randomArray.join(", ")}</p>
            <ul>
                {result.map((rs, index) => (
                    <li key={index}>
                        {rs}
                    </li>
                ))}
            </ul>
        </div>
    )
}