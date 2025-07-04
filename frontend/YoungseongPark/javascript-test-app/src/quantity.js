const cartInfo = [
    { id: 1, name: "사과", price: 1500, quantity: 4 },
    { id: 2, name: "바나나", price: 1000, quantity: 6 },
    { id: 3, name: "오렌지", price: 2000, quantity: 3 },
    { id: 4, name: "수박", price: 10000, quantity: 1 },
    { id: 5, name: "망고", price: 3500, quantity: 2 }
];

const totalPrice = cartInfo.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
}, 0);

console.log(`총 결제 금액: ${totalPrice.toLocaleString()}원`);
