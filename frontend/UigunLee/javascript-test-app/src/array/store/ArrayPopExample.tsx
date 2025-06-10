export const ArrayPopExample = () => {
    let numbers: number[] = [1,2,3,4]
    let updateNumbers = [...numbers] // ...은 조각내서 뿌린다
    let removed = updateNumbers.pop()

    let steps = [
        `초개 배열: [${numbers.join(", ")}]`,
        `마지막 요소 제거 후: [${updateNumbers.join(", ")}]`,
        `제거된 요소: ${removed}`
    ]

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <h1>배열 push() 사용법</h1>
            <p>결과:</p>
            <ul>
                { steps.map((step,  index) => (
                    <li key={index}>
                        {step}
                    </li>
                ))}
            </ul>
            <pre>
                {`
                   numbers.pop():
                `}

            </pre>
        </div>
    )
}