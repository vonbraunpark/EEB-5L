export const LogicalOperationExample = () => {
    const strictEquality = 10 === ("10" as any)
    const roughEquality = 10 == ("10" as any)
    const logicalAnd = true && false
    const logicalOr = true || false
    const bitwiseAnd = 5 & 4
    const bitwiseOr = 5 | 2

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <h3>논리 연산자</h3>
            <pre>
                {`
                    console.log(10 === "10");       // ${strictEquality}
                    console.log(10 == "10");        // ${roughEquality}
                    console.log(true && false);     // ${logicalAnd}
                    console.log(true || false)      // ${logicalOr}
                    console.log(5 & 4);             // ${bitwiseAnd}
                    console.log(5 | 2);             // ${bitwiseOr}
                `}
            </pre>
        </div>
    )
}