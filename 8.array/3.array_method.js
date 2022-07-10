//배열의 함수들
//배열 자체를 변경하는지, 새로운 배열을 반환하는지
const fruits = ['🍎','🍑','🍉']; 
//특정 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits)); 
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎'));
// 배열 안에 특정 아이템이 있는지
console.log(fruits.includes('🍑'));
// 추가 제일 뒤
fruits.push('🍐');
console.log(fruits);
// 추가 제일 앞
fruits.unshift('🍈');
console.log(fruits);
// 제거 제일 뒤
fruits.pop();
console.log(fruits);
// 제거 제일 앞
fruits.shift();
console.log(fruits);

// 중간에 추가 또는 삭제
fruits.splice(1,1); //1부터 시작해서 1개 삭제
console.log(fruits);
fruits.splice(1,0,'🧅','🥖');
console.log(fruits); // 인덱스 1자리에 0개 삭제 2가지 추가

// 잘라진 새로운 배열 만들기
let newArr = fruits.slice(0,2);
console.log(newArr); // 0부터 2전까지 출력
console.log(fruits.slice(2)); // 2부터 끝까지
console.log(fruits.slice(-2)); // 뒤에서부터 2개

// 여러 개의 배열을 붙이기
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();
// 중첩 배열을 하나의 배열로 펴기
let arr = [
    [1,2,3],
    [4,[5,6]]
];
console.log(arr);
console.log(arr.flat(2)); // flat 기본적으로 1단계만 펴준다
arr = arr.flat(2);
// 특정한 값으로 배열 채우기
arr.fill(0);
console.log(arr);

arr.fill('s',1,3); // 1부터 3 전까지 
console.log(arr);

// 배열을 문자열로 합하기
let text = arr.join(); // ,없애고 싶으면 ('') -> 공백 같이 괄호 안에 넣는다.
console.log(text);