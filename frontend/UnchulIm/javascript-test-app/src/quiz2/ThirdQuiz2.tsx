export const ThirdQuiz2 = () => {

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

    //위의 신고 사례에서 날자별 신고 개수를 집계해보세요.
    const reportCount = abuseReportList.reduce((acc, report) => {
        acc[report.date] = (acc[report.date] || 0) + 1
        return acc

    }, {} as Record<string, number>)

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-red-400 font-bold text-left">
            <ul>
                {Object.entries(reportCount).map(([date, count]) => (
                    <li key={date}>
                        {date} - 욕설 {count}회
                    </li>
                ))}
            </ul>

        </div>
    )
}