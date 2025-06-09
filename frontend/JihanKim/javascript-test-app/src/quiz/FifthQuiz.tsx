export const FifthQuiz = () => {
    const abuseReportList = [
        {userId: "user1", type: "profanity", date: "2025-06-01"},
        {userId: "user1", type: "profanity", date: "2025-06-03"},
        {userId: "user1", type: "profanity", date: "2025-06-05"},

        {userId: "user2", type: "profanity", date: "2025-06-01"},
        {userId: "user2", type: "profanity", date: "2025-06-04"},
        {userId: "user2", type: "profanity", date: "2025-06-06"},
        {userId: "user2", type: "profanity", date: "2025-06-07"},
        {userId: "user2", type: "profanity", date: "2025-06-08"},

        {userId: "user3", type: "profanity", date: "2025-06-02"},
        {userId: "user3", type: "profanity", date: "2025-06-04"},
        {userId: "user3", type: "profanity", date: "2025-06-06"},
        {userId: "user3", type: "profanity", date: "2025-06-07"},
        {userId: "user3", type: "profanity", date: "2025-06-08"},
        {userId: "user3", type: "profanity", date: "2025-06-09"},
        {userId: "user3", type: "profanity", date: "2025-06-10"},

        {userId: "user4", type: "profanity", date: "2025-06-06"},
    ];
    const user = new Map
    const date = new Map
    abuseReportList.forEach(report => {
        user.set(report.userId, (user.get(report.userId) || 0) + 1)
        date.set(report.date, (date.get(report.date) || 0) + 1)
    })
    const result1 = Array.from(user.entries()).map(([userId, count]) => `${userId}: ${count >= 7 ? "영구 정지" : count >= 5 ? "1달 정지" : count >= 3 ? "1주 정지" : "정상"}`)

    const result2 = Array.from(date.entries()).map(([date, count]) => `${date}: ${count}건`)
    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <ul>
                {result1.map((rs, index) => (
                    <li key={index}>
                        {rs}
                    </li>
                ))}
            </ul>
            <br/>
            <ul>
                {result2.map((rs, index) => (
                    <li key={index}>
                        {rs}
                    </li>
                ))}
            </ul>
        </div>
    )
}