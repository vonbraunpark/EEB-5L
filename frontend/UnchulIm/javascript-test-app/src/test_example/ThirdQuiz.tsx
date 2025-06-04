export const ThirdQuiz = () => {
    const randomArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 5) + 1);
    const frequency = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    };

    randomArray.forEach(num => {
        frequency[num] += 1;
    });

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <h2>Random Array:</h2>
            <p>{randomArray.join(', ')}</p>

            <h2>Frequency:</h2>
            <ul>
                {Object.entries(frequency).map(([num, count]) => (
                    <li key={num}>
                        Number {num}: {count} times
                    </li>
                ))}
            </ul>
        </div>
        )
}