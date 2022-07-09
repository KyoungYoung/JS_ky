// return을 함수 중간에 하게 되면 함수가 중단됌
// 조건이 맞지않은 경우 함수 도입부분에서 함수를 정지
function print(num){
    if(num < 0){
        console.log('음수입니다.');
        return; // retrun undefined 원하는 조건이 아닐때 함수 종료
    }
    
        console.log('양수입니다.');
        console.log(num);
    
}
print(-100);


function add(a = 2,b = 2){
    console.log(a);
    console.log(b);
    return a + b;
}
console.log(add());

//rest parameter 얼마나 많은 인자가 적용될 지 모를 때 사용한다.
function sum(...numbers){
    console.log(numbers);
}
sum(1,2,3,45,5,12,6,66);
