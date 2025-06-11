import {number} from "@rspack/core/compiled/zod";

export const RandomExample = () => {
    let numbers: number[] = []
    let frequencyResults: number[] = [0, 0, 0, 0, 0]
    // let counts: number[] = results.map(num => num++)
    for(let i=0; i<20; i++) {
        numbers.push(Math.floor(Math.random() * 5) + 1)
    }

    for(let i=0; i<20; i++) {
        if (numbers[i] === 1) {
            frequencyResults[0] += 1
        }else if (numbers[i] === 2) {
            frequencyResults[1] += 1
        }else if (numbers[i] === 3) {
            frequencyResults[2] += 1
        }else if (numbers[i] === 4) {
            frequencyResults[3] += 1
        }else if (numbers[i] === 5) {
            frequencyResults[4] += 1
        }
    }

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <h3>Quiz03</h3>
            <p>랜덤 배열: {numbers.join(", ")}</p>
            <p>결과:</p>
            <ul>
                { frequencyResults.map((step, index) => (
                    <p>{index + 1}: {step}</p>

                ))}
            </ul>
        </div>
    )
}