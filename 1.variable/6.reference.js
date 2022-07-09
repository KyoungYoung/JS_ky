//원시 타입은 값이  복사되어 전달된다.
let a =1;
let b = a; // 1
b = 2; // 2
console.log(a);
console.log(b);

// 객체 타입은 참조값(메모리 주소, 레퍼런스)이 복사되어 전달된다.

let apple ={ // 주소값 0x1234
    name: '사과'
}
let orange = apple; //주소값 복사 0x1234