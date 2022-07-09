// class Tiger{
//     constructor(color){
//         this.color = color;
//     }
//     get eat(){
//         console.log('먹자');
//     }
//     get sleep(){
//         console.log('자자');
//     }
// }

// class Dog{
//     constructor(color){
//         this.color = color;
//     }
//     eat(){
//         console.log('먹는다');
//     }
//     get sleep(){
//         console.log('잠잔다');
//     }
//     get play(){
//         console.log('놀자');
//     }
// }

// const tiger = new Tiger('orange');
// const dog = new Dog('brown');
// // console.log(tiger.eat);
// tiger.sleep;
// dog.eat();


class Animal{
    constructor(color){
        this.color = color;
    }
    get eat(){
        console.log('eat!!!');
    }
    get sleep(){
        console.log('sleep!!!!');
    }
}

class Tiger extends Animal{}
const tiger = new Tiger('orange');
console.log(tiger);
tiger.eat;

class Dog extends Animal{
    constructor(color,ownerName){
        super(color);
        this.ownerName = ownerName;
    }
    get play(){
        console.log('놀아여');
    }
    // 오버라이딩 overriding -자식 클래스에서 부모 클래스를 덮어씌운다
    get eat(){
        super.eat;
        console.log('강아지가 먹는다');
    }
}
const dog = new Dog('brown','경영');
console.log(dog);
dog.play;
dog.eat;
console.log(dog.ownerName);