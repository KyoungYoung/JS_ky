// 1.condition 0부터 값까지 순회하는 숫자 전부 출력
const num = (max) => {
    for(let i = 0; i <= max; i++){
        console.log(i);
    }
    
}
// 2.condition 순회하는 숫자 두배 값 출력
const numDouble = (max) => {
    for(let j = 0; j <= max; j++){
        console.log(2 * j);
    }
}
// main function
function iterate(max,action){
    let result = action(max);
    console.log(result);
    return result;
}

iterate(5,num);
iterate(5,numDouble);