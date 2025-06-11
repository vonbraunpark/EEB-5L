export const SecondQuix = () => {
    const text = "Stocks surged on Monday after the U.S. and China agreed to roll back tariffs for a 90-day period.\n" +
        "\n" +
        "The Dow Jones Industrial Average rose 1,160.72 points, or 2.81%, exiting correction territory. The S&P 500 climbed 3.26% and the Nasdaq Composite rose 4.35%, exiting bear market territory.\n" +
        "\n" +
        "The tariffs President Donald Trump announced against China on April 2 are being cut by 24 percentage points for this temporary period while retaining the remaining ad valorem rate of 10% from that announcement, according to a joint statement.\n" +
        "\n" +
        "China agreed to the same stipulations, adding that it will \"adopt all necessary administrative measures to suspend or remove the non-tariff countermeasures taken against the United States since April 2,\" the announcement stated.\n" +
        "\n" +
        "Under the deal, reciprocal tariffs for both countries would be reduced by 115%. The U.S. will temporarily lower its tariffs on Chinese goods from 145% to 30%, and China will reduce its levies on American products from 125% to 10%.\n" +
        "\n" +
        "FOX Business Landon Mion contributed to this report"
    let lines = text.split("\n")
    let includeKeywordLine = lines.filter(line => line.includes("percent") || line.includes("tariff ") || line.includes("rose") || line.includes("climbed "))

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <h3>Quiz02</h3>
            <p>결과:</p>
            <ul>
                { includeKeywordLine.map((line, index) => (
                    <li key={index}>
                        {line.trim()}
                    </li>
                ))}
            </ul>
        </div>
    )
}

