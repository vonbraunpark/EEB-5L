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

// 사용자별 신고 횟수 집계
const userReportCounts = abuseReportList.reduce((acc, report) => {
    const { userId } = report;
    acc[userId] = (acc[userId] || 0) + 1;
    return acc;
}, {});

// 신고 횟수에 따른 제재 수준 결정
const userSanctions = Object.entries(userReportCounts).map(([userId, count]) => {
    let sanction = "경고";
    if (count >= 7) {
        sanction = "영구 정지";
    } else if (count >= 5) {
        sanction = "1달 정지";
    } else if (count >= 3) {
        sanction = "1주 정지";
    }
    return { userId, count, sanction };
});

// 결과 출력
console.table(userSanctions);

