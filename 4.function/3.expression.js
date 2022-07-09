//함수 선언문 function 이름(매개변수,인자) {}
//함수 표현식 const 이름 = function (매개변수,인자) {}
//화살표 함수 const 이름 = (매개변수,인자) => {}

function add(a,b){
    return a + b;
};
let addDouble = add(1,2);
console.log(addDouble);

let name = function (a,b){
    return a + b;
}
let mutiplication = name(10,20);
console.log(mutiplication);

// 코드 안 값을 바로 리턴하는 함수라면 {},return 생략 가능
direct = (a,b) => {
    return a + b;
}
// direct = (a,b) => a + b
let directTwo =  direct(10,10);
console.log(directTwo);

// 생성자 함수 const object = new Function(); 객체 편에서 다룬다. 표현식이다

// IIFE (Immedicately-Invoked Function Expression) 즉시 실행 함수
(function run(){
    console.log('😙');
})();