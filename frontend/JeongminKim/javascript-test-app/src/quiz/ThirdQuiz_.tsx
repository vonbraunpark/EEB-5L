export const ThirdQuiz_ = () => {
    let numArray: number[] = []
    for(let i =0; i<20; i++){
        numArray[i] = Math.floor(Math.random() * 20 + 1)
    }

    const





    const LOOP_MAX = 20;

    const NUMBER_MIN = 1
    const NUMBER_MAX = 5

    for (let i = 0; i < LOOP_MAX; i++) {
        randomNumberList.push(
            Math.floor(Math.random() * (NUMBER_MAX - NUMBER_MIN + 1)) + NUMBER_MIN
        )
    }

    // reduce()는 하기와 같이 타입 변환을 적용할 수 있습니다.
    // 결론적으로 reduce() 내부의 list 배열 내에 있는 각 숫자의 빈도수를 관리할 수 있는 frequencyHash를 생성
    // reduce<> <- 이 부분에서 첫 번째 인자의 타입을 지정할 수 있음
    // Java로 보자면 HashMap<Integer, Integer>라고 생각해도 무방함

    const frequencyHash = randomNumberList.reduce<Record<number, number>>((list, index) => {
        list[index] = (list[index] || 0) + 1;
        return list;
    }, {})

    console.log(frequencyHash)

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <p>전체 리스트: {randomNumberList.join(', ')}</p>
            <h3>빈도수 출력</h3>
            { Object.entries(frequencyHash).map(([key, value]) => (
                <li key={key}>
                    번호 {key}: {value} 회 반복
                </li>
            ))}
            <pre>
                {`
                    1. 1 ~ 5 사이의 무작위 정보를 20개 생성합니다.
                    2. 전체를 순회 하면서 같은 숫자가 있는지 체크합니다.
                    3. 숫자에 해당하는 값만큼 해쉬를 생성하던가, 전역으로 카운트를 하던가,
                       전역 배열에서 관리를 하던가, 기타 여러 가지 방식으로 구현할 수 있습니다. 
                `}
            </pre>
        </div>
    )
}