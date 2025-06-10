import {useRef} from "react";

export const AbuseReportList2 = () => {
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

    const reportCountByUser: Record<string, number> = {};
        abuseReportList.forEach(({userId}) => {
            reportCountByUser[userId] = (reportCountByUser[userId] || 0) + 1;
        })

    const userPenalty: Record<string, string> = {};
    Object.entries(reportCountByUser).forEach(([userId, count]) => {
            if (count >= 7) {
                userPenalty[userId] = "영구 정지"
            } else if (count >= 5) {
                userPenalty[userId] = "1달 정지"
            } else if (count >= 3) {
                userPenalty[userId] = "1주 정지"
            } else {
                userPenalty[userId] = "제한 주의"
            }
    })

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <h3>빈도수 출력</h3>
            { Object.entries(reportCountByUser).map(([key, value]) => (
                <li key={key}>
                    ID {key}: {value} 회 욕설로 '{userPenalty[key]}'
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