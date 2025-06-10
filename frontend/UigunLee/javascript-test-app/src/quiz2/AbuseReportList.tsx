import {useRef} from "react";

export const AbuseReportList = () => {
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

    const reportCountByUser: Record<string, number> ={};
        abuseReportList.forEach(({userId}) => {
            reportCountByUser[userId] = (reportCountByUser[userId] || 0) + 1;
        })



    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <h3>빈도수 출력</h3>
            { Object.entries(reportCountByUser).map(([key, value]) => (
                <li key={key}>
                    ID {key}: {value} 회 욕설
                </li>
            ))}
            <pre>
                {`
                    2. 아래와 같은 욕설 신고 정보가 있다 가정합니다.
                    cconst abuseReportList = [
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
                    
                    - 욕설 3회 이상은 \`1주 정지\`
                    - 욕설 5회 이상은 \`1달 정지\`
                    - 욕설 7회 이상은 \`영구 정지\`
                    - 각각의 플레이어들 상태를 파악해봅시다.
                `}
            </pre>
        </div>
    )
}