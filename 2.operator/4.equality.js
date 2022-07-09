// 동등 비교 관계 연산자 (equalityn operators)
// ==, !=,
// === 값과 타입이 둘 다 같음
// !== 값과 타입이 다름
console.log(2=='2');
console.log(2!=2);
console.log(2==='2');
console.log(2!=='2');

console.log(true == 1);
console.log(true === 1);

const obj1 = {
    name: 'js',
};
const obj2 = {
    name: 'js',
};
console.log(obj1.name === obj2.name);