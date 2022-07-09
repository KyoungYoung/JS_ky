// loop statement
// for(변수 선언문; 조건식; 증감식){}

for(let i = 2; i < 10; i++){
    for(let j = 1; j < 10; j++){
        // console.log(i + " x " + j + " = " + i * j)
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

// 무한 루프
for(;;){
    console.log('😁');
    break;
}

for(let k = 1; k < 20; k++){
    if(k === 10){
        console.log('10입니다.');
        break;
    }
    console.log(k);
}
// while(조건){}
// 조건이 false가 될때까지 {}코드 반복 실행
let a = 5;
while(a >= 0){
    console.log(a);
    a--
} 

let isActive = true;
let i = 1;
while(true){
    console.log('반복중입니다!');
    if( i === 5){
        break
    }
    i++;
}

do{
    console.log('do while');
}while(false);