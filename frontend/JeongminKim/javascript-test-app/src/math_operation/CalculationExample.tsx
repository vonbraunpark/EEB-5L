export const CalculationExample = () => {
    const add = 3 + 3;
    const subtract = 10 - 5;
    const multiply = 4 * 2;
    const divide = 20 / 4;
    const remainder = 10 % 3;

    return (
        <div style={{ marginBottom: "16px", padding: "16px", 
                        border: "1px solid #ccc", borderRadius: "8px" }}>
            <h3>연산 결과</h3>
            <p>3 + 3 = {add}</p>
            <p>10 - 5 = {subtract}</p>
            <p>4 * 2 = {multiply}</p>
            <p>20 / 4 = {divide}</p>
            <p>10 % 3 = {remainder}</p>
        </div>
    )
}