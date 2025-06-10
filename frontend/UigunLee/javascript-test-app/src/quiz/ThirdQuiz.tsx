export const ThirdQuiz = () => {
    // 1 ~ 5 사이의 무작위 정보를 20개 생성
    const LOOP_COUNT = 20
    const LOOP_MAX = 5
    const LOOP_MIN = 1

    let queue: number[] = [];

    for (let i=0; i<LOOP_COUNT; i++) {
        const randNum = Math.floor(Math.random() * (LOOP_MAX - LOOP_MIN + 1)) + LOOP_MIN
        queue.push(randNum)
    }

    // 전체를 순회 하면서 같은 숫자가 있는지 체크
    // reduce()는 하기와 같이 타입 변환을 적용할 수 있습니다.
    const frequencyHasMap = queue.reduce<Record<number, number>>((frequencyMap, index) => {
        frequencyMap[index] = (frequencyMap[index] || 0) + 1;
        return frequencyMap;
    }, {})

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <p>1 ~5 사이의 무작위 정보 20개: {queue.join(', ')}</p>
            <h3>빈도수 출력</h3>
            { Object.entries(frequencyHasMap).map(([key, value]) => (
                <li key={key}>
                    번호 {key}: {value} 회 반복
                </li>
            ))}
            <pre>
                {`
                    1. 1 ~ 5 사이의 무작위 정보를 20개 생성합니다.
                    2. 전체를 순회 하면서 같은 숫자가 있는지 체크합니다.
                    3. 숫자에 해당하는 값만큼 해쉬를 생성하던가, 전역으로 카운트를 하던가, 
                       전역 배열에서 관리를 하던가, 기타 여러 가지 방식으로 구분할 수 있습니다. 
                `}
            </pre>
        </div>
    )
}