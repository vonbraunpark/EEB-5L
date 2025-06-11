export const ArrayFindQuiz = () => {
    const text = "Stocks surged on Monday after the U.S. and China agreed to roll back tariffs for a 90-day period." +
        "The Dow Jones Industrial Average rose 1,160.72 points, or 2.81%, exiting correction territory. The S&P 500 climbed 3.26% and the Nasdaq Composite rose 4.35%, exiting bear market territory." +
        "The tariffs President Donald Trump announced against China on April 2 are being cut by 24 percentage points for this temporary period while retaining the remaining ad valorem rate of 10% from that announcement, according to a joint statement." +
        "China agreed to the same stipulations, adding that it will adopt all necessary administrative measures to suspend or remove the non-tariff countermeasures taken against the United States since April 2, the announcement stated." +
        "Under the deal, reciprocal tariffs for both countries would be reduced by 115%. The U.S. will temporarily lower its tariffs on Chinese goods from 145% to 30%, and China will reduce its levies on American products from 125% to 10%." +
        "FOX Business Landon Mion contributed to this report";

    const words = text.split(" ");
    const keywords = ["percent", "tariff", "rose", "climbed"];

    const foundWord = words.find(word =>
        keywords.some(keyword => word.toLowerCase().includes(keyword))
    );
    const keywordMatches = words.filter(word =>
        keywords.some(keyword => word.toLowerCase().includes(keyword))
    );

    const keywordCount = keywordMatches.length;

    const steps = [
        `전체 단어 수: ${words.length}개`,
        `찾고 있는 키워드: ${keywords.join(", ")}`,
        `find() 결과 (첫 번째 발견): ${foundWord}`,
        `키워드가 포함된 단어 수: ${keywordCount}`
    ]

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <h3>문자 배열에서 find(조건) 사용</h3>
            <p> 결과:</p>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>
                        {step}
                    </li>
                ))}
            </ul>
            <pre>
                {`
                    const keywords = ["percent", "tariff", "rose", "climbed"];
                    const foundWord = words.find(word => keywords.some(keyword => word.includes(keyword))
                    const keywordMatches = words.filter(word => keywords.some(keyword => word.toLowerCase().includes(keyword))
                    const keywordCount = keywordMatches.length;
                    );
                `}
            </pre>
        </div>
    );
};