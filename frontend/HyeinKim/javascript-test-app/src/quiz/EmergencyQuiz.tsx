export const EmergencyQuiz = () => {
    let appleCount = 100
    let applePrice = 10000
    let userWannaBuyCount = 5
    const totalPrice = applePrice * userWannaBuyCount

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <p>현재 사과의 개수: {appleCount}</p>
            <p>현재 사과의 가격: {applePrice}</p>
            <p>사용자가 구매하기 원하는 사과의 개수: {userWannaBuyCount}</p>
            <p>사용자가 내야하는 금액: {totalPrice}</p>
            <pre>
                {`
                    여러분이 과일 가게 사장입니다.
                    물건을 온라인으로 판매하려고 하는데 어떻게 해야 할까요?
                    
                `}
            </pre>
        </div>
    )
}

