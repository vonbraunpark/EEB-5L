export const ThirdQuiz = () => {
    let  randomArray = [];
    const  LOOP_MAX = 20;
    const  NUMBER_MIN = 1;
    const  NUMBER_MAX = 5;

    for (let i = 0; i < LOOP_MAX; i++) {
        let randomNumbers = Math.floor(Math.random() * NUMBER_MAX-NUMBER_MIN+1)+NUMBER_MIN
        randomArray.push(randomNumbers)
    }
    //숫자 별 빈도수를 체크하고 출력하세요.
    //숫자가 같은 경우 count가 하나씩 올라가게 하는거
    //생각나는건 if 문과 for 문?
    //reduce()는 하기와 같이 타입 변환을 적용할 수 있습니다.
    const frequencyHash = randomArray.reduce<Record<number, number>>((list, index) => {
        list[index] = (list[index] || 0) + 1;
        return list;
    }, {})

    console.log(frequencyHash)

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <p>전체 리스트: {randomArray.join(', ')}</p>
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
                       전역 배열에서 관리를 하던가, 기타 여러 가지 방식으로 구현 할 수 있습니다. 
                `}
            </pre>

        </div>
    )
}