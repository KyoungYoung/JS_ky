let array = new Array(1,2);
console.log(array);

array = Array.of(1,2,3);
console.log(array);

const anotherArray = [1,2];
console.log(anotherArray);
// 배열 복사
array = Array.from(anotherArray);
array = Array.from('text');
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야한다.
// 자바스크립트는 연속적으로 이어져 있지 않다. 오브젝트와 유사하다.
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체이다.
// 이걸 보완하기 위해 타입이 정해진 타입 배열이 있다.(Typed Collections)
array = Array.from({
    0:'안',
    1:'녕',
    length: 2,
});
console.log(array);