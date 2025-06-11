export const FisrtQuiz2 = () => {
    const cartInfo = [
        {id: 1, name: "사과", price: 1500, quantity: 4},
        {id: 2, name: "바나나", price: 1000, quantity: 6},
        {id: 3, name: "오렌지", price: 2000, quantity: 3},
        {id: 4, name: "수박", price: 10000, quantity: 1},
        {id: 5, name: "망고", price: 3500, quantity: 2}
    ];
    let sum = cartInfo.reduce((acc, item) => {
        return (
            acc + (item.price * item.quantity)
        )
    },0)
    //장바구니 내용들을 합산하여 전체 가격이 얼마인지 출력해보세요.
    return(
        <div className="bg-gray-100 p-5 my-4 rounded-md border-2 border-red-400 font-bold text-left">
            <h3>Quiz 1번</h3>
            <p>sum:{sum}</p>
        </div>
    )
}