// quiz 1 : 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수 만들기

const fruits = ['🍌','🍓','🍇','🍓'];
fruits.splice(1,1,'🥝');
fruits.splice(3,1,'🥝');
console.log(fruits);

// quiz 2 : 배열과 특정 요소를 전달받아, 배열 안에 그 요소가 몇 개나 있는지 카운트하는 함수 만들기

const fruits2 = [ '🍌', '🥝', '🍇', '🥝' ];
let count = 0;
for(let i = 0; i < fruits2.length; i++){
    if(fruits2[i] === '🥝'){
        count++;
    }
}
console.log(count);

// quiz 3 : 배열 1, 배열 2의  두 개의 배열을 전달 받아 배열 1 아이템중 배열 2에 존재하는 
// 아이템만 담고있는 배열 반환

const arr1 = ['🍌','🥝','🍇']
const arr2 = ['🍌','🍓','🍇','🍓']
