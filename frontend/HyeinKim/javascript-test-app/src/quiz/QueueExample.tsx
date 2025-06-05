export const QueueExample = () => {
    let numbers: number[] = [1, 2, 3, 4]
    let updateNumbers = [...numbers]
    let add = updateNumbers.push()
    let remove = updateNumbers.shift()

    let steps = [
        `초개 배열: [${numbers.join(", ")}]`,
        `추가한 후 배열: [${updateNumbers.join(", ")}]`,
        `추가한 요소: [${add}]`
    ]
    let removes = [
        `초개 배열: [${numbers.join(", ")}]`,
        `추가한 후 배열: [${updateNumbers.join(", ")}]`,
        `추가한 요소: [${remove}]`
    ]

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <h3>Queue simulation</h3>
            <p>결과:</p>
            <ul>
                { steps.map((step, index) => (
                    <li key={index}>
                        {step}
                    </li>
                ))}
            </ul>
            <pre>
                {`
                    numbers.shift();
                `}
            </pre>
        </div>
    )
}