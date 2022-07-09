// 논리 연산자 logical operator
// && or || or ! or !!(단항 연산자 응용버전 boolean 값)

let num = 21;
if(num >= 0 || num < 10){
    console.log('👍');
}
else{
    console.log('🍏');
} 

console.log(!'text');
console.log(!!'text');// ! : 부정연산자 , !! : 값을 boolean 타입으로 변환
console.log(+false);
console.log(-false);