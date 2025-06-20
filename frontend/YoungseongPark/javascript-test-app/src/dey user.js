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

// 날짜별 신고 횟수 집계
const dateReportCounts = abuseReportList.reduce((acc, report) => {
    const { date } = report;
    acc[date] = (acc[date] || 0) + 1;
    return acc;
}, {});

// 결과 출력
console.table(dateReportCounts);
