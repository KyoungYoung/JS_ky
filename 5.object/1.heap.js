/**객체는 heap 부분에 들어가있다
 * 메모리 주소는 따로!
 * 객체란 서로 연관있는 속성과 행동을 묶어 주기 위해
 */

// Object literal {key : value}
// new object()
// object.create();
// key -> 문자, 숫자, 문자열, 심볼
// value -> 원시값, 객체(함수)

let apple = {
    name : 'apple',
    'hello' : '😅',
    0 : 1,
    ['hello-bye'] : '👍'
};
apple.imoji = '🥰';
console.log(apple);
console.log(apple.imoji);
console.log(apple['imoji']);
delete apple.imoji;
console.log(apple);