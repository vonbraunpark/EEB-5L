// ControlFlowFor 컴포넌트: for문 흐름을 시각적으로 설명해주는 UI
export const ControlFlowFor = () => {
    // 루프 실행 결과 숫자들을 담을 배열
    let loopResults = [];
    // 각 단계별 설명 문자열을 담을 배열
    let steps = [];

    // i가 0부터 2까지 반복 (총 3번 반복)
    for (let i = 0; i < 3; i++) {
        loopResults.push(i); // i 값을 loopResults에 추가
        // 현재 i 값과 loopResults 배열 상태를 설명 문자열로 저장
        //...은 모든요소를 교합?으로 분해한다
        steps.push(`i = ${i} 일 때 loopResults = [${[...loopResults].join(", ")}]`);
    }



    // 화면에 렌더링할 JSX 반환
    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <h3>for 문</h3>
            <p>결과:</p>
            <ul>
                {/* steps 배열의 각 설명을 리스트 항목으로 출력 */}
                {steps.map((step, index) => (
                    <li key={index}>
                        {step}
                    </li>
                ))}
            </ul>

            {/* 실제 실행한 for 문 코드를 코드 블록으로 출력 */}
            <pre>
                {`
                    for (let i = 0; i < 3; i++) {
                        loopResults.push(i)
                    }
                `}
            </pre>
        </div>
    )
}
