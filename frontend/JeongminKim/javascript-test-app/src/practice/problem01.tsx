export const AbuseReportList = () => {

    let name = "홍길동"
    let age = 25
    console.log(`${name}님의 나이는 ${age}입니다.`);

    // 변수 num에 어떤 숫자가 저장되어 있습니다.
    // 이 숫자가 짝수면 "짝수입니다.", 홀수면 "홀수입니다."를 출력하세요.
    let num = 7;
    if(num % 2 ==0){
        console.log('짝수입니다.')
    } else {
        console.log('홀수입니다.')
    }

    // 1부터 10까지 숫자를 하나씩 출력하세요. (for문 사용)
    for(let i=1; i<=10; i++){
        console.log(i)
    }

    // 두 개의 숫자를 더한 값을 반환하는 함수 add를 작성하세요.
    function add(a:number, b:number):number{
        return a+b;
    }

    let result = add(5, 3){
        console.log(result);
    }


    // 다음 배열의 모든 값을 하나씩 출력하세요.
    let fruits = ["사과", "바나나", "딸기"];
    for(let i=0; i<fruits.length; i++){
        console.log(fruits[i])
    }

    // 사람의 이름(name)과 나이(age)를 포함하는 객체 person을 만들고,
    // "OOO님의 나이는 OO세입니다." 형식으로 출력하세요.
    let person = { name:"홍길동", age:20}
    console.log(`${person.name}님의 나이는 ${person.age}세 입니다.`)

    // 1부터 100까지 숫자 중에서 짝수의 총합을 구하세요.








}