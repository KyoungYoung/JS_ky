function interate(max,action){
    for(i = 0; i < max; i++){
        action(i);
    }
}
// callback function
function just(num){
    console.log(num);
}

function doubleJust(num){
    console.log(num * 2);
}
interate(5,just);
interate(5,doubleJust);

setTimeout(() => {
    console.log('3초뒤에 이 함수가 실행된다');
},3000)