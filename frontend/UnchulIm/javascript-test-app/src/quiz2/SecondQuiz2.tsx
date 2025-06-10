export const SecondQuiz2 = () => {
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
    //- 욕설 3회 이상은 `1주 정지`
    // - 욕설 5회 이상은 `1달 정지`
    // - 욕설 7회 이상은 `영구 정지`
    // - 각각의 플레이어들 상태를 파악해봅시다.
    // 욕설 횟수 누적

    const userCounts = abuseReportList.reduce((acc, report) => {
        if (!acc[report.userId]) {
            acc[report.userId] = 0;
        }
        acc[report.userId] += 1;
        return acc;
    }, {} as Record<string, number>);

    // 정지 상태 판별 함수
    const getStatus = (count: number) => {
        if (count >= 7) return "영구 정지";
        if (count >= 5) return "1달 정지";
        if (count >= 3) return "1주 정지";
        return "주의";
    };

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-red-400 font-bold text-left">
            <h2 className="text-xl mb-2">플레이어 제재 상태</h2>
            <ul>
                {Object.entries(userCounts).map(([userId, count]) => (
                    <li key={userId}>
                        {userId} - 욕설 {count}회 → {getStatus(count)}
                    </li>
                ))}
            </ul>
        </div>
    )
}