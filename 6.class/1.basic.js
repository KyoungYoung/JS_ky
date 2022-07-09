/**
 * 클래스 -> 객체를 생성할 수 있는 템플릿 (청사진, 틀)
객체지향 프로그래밍 -> 객체끼리 호환가능하게 하는 프로그래밍
프로토 타입보다 간편하다

 */

// object를 손쉽게 만들 수 있는 템플릿
// 생성자 함수 (너무 오래되서 잘 안씀)
// 클래스 (최신버전)

// 생성자 함수

// function Kk(name,emoji){
//     this.name = name;
//     this.emoji = emoji;
//     this.display = () =>{
//         console.log(`${this.name}: ${this.emoji} `);
//     };
// };

// const apple = new Kk('apple','🍎');
// const banana = new Kk('banana','🍌');
// const orange = new Kk('orange','🍊');

// console.log(apple);
// apple.display();
// console.log(banana);
// console.log(orange);

// class 
// class Kk{
//     // 생성자 : new 키워드로 객체를 생성할 때 호출되는 함수
//     constructor(name,emoji){

//         this.name = name;
//         this.emoji = emoji;
//     }
//     display = () =>{
//         console.log(`${this.name}: ${this.emoji} `);
//     };
// };


// const apple = new Kk('apple','🍎');
// const banana = new Kk('banana','🍌');
// const orange = new Kk('orange','🍊');

// console.log(apple);
// apple.display();
// console.log(banana);
// console.log(orange);

class Fruit{
    constructor(name,emoji){
        this.name = name;
        this.emoji = emoji;
    }
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    }
}

// apple은 Fruit class의 instance이다
// 클래스에 의해 만들어진 객체는 인스턴스라 부른다.
const apple = new Fruit('apple','🍎');
const banana = new Fruit('banana','🍌');
const orange = new Fruit('orange','🍊');

console.log(apple);
console.log(banana);
banana.display();
console.log(orange);
