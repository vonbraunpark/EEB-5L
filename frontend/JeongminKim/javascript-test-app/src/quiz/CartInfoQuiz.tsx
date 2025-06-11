export const CartInfoQuiz = () => {
    const cartInfo = [
        { id: 1, name: "사과", price: 1500, quantity: 4 },
        { id: 2, name: "바나나", price: 1000, quantity: 6 },
        { id: 3, name: "오렌지", price: 2000, quantity: 3 },
        { id: 4, name: "수박", price: 10000, quantity: 1 },
        { id: 5, name: "망고", price: 3500, quantity: 2 }
    ];

    let sum = cartInfo.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-blue-500 font-bold text-left">
            <h3>장바구니 물건 가격 총합</h3>
            <p>sum: {sum}</p>
            <p>결과: </p>
            <pre>
                {`
                    { id: 1, name: "사과", price: 1500, quantity: 4 },
                    { id: 2, name: "바나나", price: 1000, quantity: 6 },
                    { id: 3, name: "오렌지", price: 2000, quantity: 3 },
                    { id: 4, name: "수박", price: 10000, quantity: 1 },
                    { id: 5, name: "망고", price: 3500, quantity: 2 }
                `}
            </pre>
        </div>
    )
}