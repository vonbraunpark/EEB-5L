

export const SecondQuiz1 = () => {
    const abuseReportList = [
        { userId: "user1", type: "profanity", date: "2025-06-01" },
        { userId: "user1", type: "profanity", date: "2025-06-03" },
        { userId: "user1", type: "profanity", date: "2025-06-05" },

        { userId: "user2", type: "profanity", date: "2025-06-01" },
        { userId: "user2", type: "profanity", date: "2025-06-04" },
        { userId: "user2", type: "profanity", date: "2025-06-06" },
        { userId: "user2", type: "profanity", date: "2025-06-07" },
        { userId: "user2", type: "profanity", date: "2025-06-08" },

        { userId: "user3", type: "profanity", date: "2025-06-02" },
        { userId: "user3", type: "profanity", date: "2025-06-04" },
        { userId: "user3", type: "profanity", date: "2025-06-06" },
        { userId: "user3", type: "profanity", date: "2025-06-07" },
        { userId: "user3", type: "profanity", date: "2025-06-08" },
        { userId: "user3", type: "profanity", date: "2025-06-09" },
        { userId: "user3", type: "profanity", date: "2025-06-10" },

        { userId: "user4", type: "profanity", date: "2025-06-06" },
    ];
    /*
    let totalPrice = cartInfo.reduce((totalprice, cartItem)=>{
        return totalprice + cartItem.price*cartItem.quantity
    }, 0)
     */
    /*
    numbers.reduce((누산값, 현재요소값, 현재요소의index, 현재배열) => {
    return 다음누산값;
    }, 초기누산값);

    acc: 누적 객체. { userId: count } 형태
    report.userId가 이미 있으면 +1, 없으면 1로 초기화
     */
    /*
    acc[report.userId] = (acc[report.userId] || 0) + 1;
    ------------------   ------------------------------
    HashMap에서 key값을     HashMap에서 value 값을 의미함
    의미함
    as Record<string, number> => 이거는 HashMap에서 타입을 정하는 코드
     */


   //1.
   let reportCount= abuseReportList.reduce((acc, report) => {
       acc[report.userId] = (acc[report.userId] || 0) + 1;
       return acc;
       },{} as Record<string, number>);

   /*
     위에 코드는 이제 reportCount 배열 변수에 userId라는 키 값에 욕한 갯수라는 value가 저장된거다
     let reportCount = [
     { userId1: 3(욕을 한 횟수) },
     { userId2: 5(욕을 한 횟수) },
     { userId3: 7(욕을 한 횟수) },
     { userId4: 1(욕을 한 횟수) },
     ]

   */
    let result = Object.entries(reportCount).map(([userId, count]) => {
        let status = "정상";
        if (count >= 7) status = "영구 정지";
        else if (count >= 5) status = "1달 정지";
        else if (count >= 3) status = "1주 정지";
        //{key} 에게 {value} 를 부여합니다.
        return `[${userId}] 에게 [${status}]를 부여합니다.`;
    })
    /*
     위에 코드는 이제 result 배열 변수에 userId라는 키 값에 욕한 갯수라는 value가 저장된거다
     let reportCount = [
     { userId1: 3(욕을 한 횟수) },
     { userId2: 5(욕을 한 횟수) },
     { userId3: 7(욕을 한 횟수) },
     { userId4: 1(욕을 한 횟수) },
     ]
     */
    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <h3>acc값을 보기 위해</h3>
            <ul>
                {
                    Object.entries(reportCount).map(([key, value]) => (
                        <li key={key}>
                            {key}: {value} 했음
                        </li>
                    ))
                }
            </ul>
            <h3>Quiz2-2번 문제 버전 1</h3>
            <ul>
                {result.map((result, index) => (
                    <li key={index}>
                        {result}
                    </li>
                ))}
            </ul>

            <pre>
                {`
                    E1.
                    욕설 신고 정보가 있다 가정하겠습니다
                    
                    E2. 
                    - 욕설 3회 이상은 \`1주 정지\`
                    - 욕설 5회 이상은 \`1달 정지\`
                    - 욕설 7회 이상은 \`영구 정지\`
                    - 각각의 플레이어들 상태를 파악해봅시다.
                   
                   !생각 정리!
                   무엇을 구해야할까?
                   우선 플레이어를 나눠야 한다, 그래야 각각의 플레이어가 
                   욕설한 횟수를 구할 수 있으니까
                   
                   그리고 각각의 플레이어가 욕설한 횟수를 누적해야 하는 코드를 만들어야 한다.
                   
                   그리고 욕설의 갯수를 파악해서 얼마나 정지해야 할지 결과값을 도출해야 한다.
                   
                   음... 랜덤수의 누적수파악하는거랑 비슷할거 같다.
                   
                `}
            </pre>
        </div>
    )
}