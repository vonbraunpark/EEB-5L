export const SecondQuiz = () => {
    let news = `Stocks surged on Monday after the U.S. and China agreed to roll back tariffs for a 90-day period.

The Dow Jones Industrial Average rose 1,160.72 points, or 2.81%, exiting correction territory. The S&P 500 climbed 3.26% and the Nasdaq Composite rose 4.35%, exiting bear market territory.

The tariffs President Donald Trump announced against China on April 2 are being cut by 24 percentage points for this temporary period while retaining the remaining ad valorem rate of 10% from that announcement, according to a joint statement.

China agreed to the same stipulations, adding that it will "adopt all necessary administrative measures to suspend or remove the non-tariff countermeasures taken against the United States since April 2," the announcement stated.

Under the deal, reciprocal tariffs for both countries would be reduced by 115%. The U.S. will temporarily lower its tariffs on Chinese goods from 145% to 30%, and China will reduce its levies on American products from 125% to 10%.

FOX Business Landon Mion contributed to this report`
    // regularExpression을 활용할 수 있을까?
    // 반복문을 해서 매치하는 것이 나오면 나오게 해야하나? 찾으려면 이중으로 해야할거 같은데....이거 말고 방법은 없나?
    //let findWordList = ["percent","tariff","rose","climbed"]
    let sentences = news.split(/\.\s+/)
    let findSentences = []
    for(let i = 0; i < sentences.length; i++) {
       if(sentences[i].includes("percent")) {
           findSentences.push(sentences[i])
       } else if(sentences[i].includes("tariff")) {
           findSentences.push(sentences[i])
       } else if(sentences[i].includes("rose")) {
           findSentences.push(sentences[i])
       }  else if(sentences[i].includes("climbed")) {
           findSentences.push(sentences[i])
       }
    }
    let steps: string[] = findSentences.map((Sentences,index) =>
        `찾은 문장 ${index+1}: ${Sentences}`)

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>
                        {step}
                    </li>
                ))}
            </ul>
            <pre>
                {`
                    아래 문서를 읽어서 주요 정보만 별도로 추출해봅시다.
                    중요한 키워드로는 \`percent\` , \`tariff\` , 
                    \`rose\` , \`climbed\` 4개로 잡아봅시다.
                `}
            </pre>
        </div>
    )
}