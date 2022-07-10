const fruits = ['🍊','🍐','🍎','🍈'];

// 배열 아이템을 참조하는 방법
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// 추가, 삭제하는 방법 
fruits[4] = '🍋'; // 좋지 않은 방식
fruits[fruits.length]= '🍒';
console.log(fruits);

delete fruits[1]; // 좋지 않은 방식
console.log(fruits);

fruits.pop(1);
console.log(fruits);