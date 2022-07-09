const num1 = 123; // 원시
const num2 = new Number(123); // 객체
console.log(typeof num1);
console.log(typeof num2);

// 숫자인지 아닌지
if(num1 === Number.NaN){}
if(Number.isNaN(num1)){}

// 반올림하여 문자열 변환
const num3 = 1234.23;
console.log(num3.toFixed());
// 숫자 자체를 문자열로 변환
console.log(num3.toString());
// 숫자를 나라에 맞게 사용
console.log(num3.toLocaleString('ar-EG'));