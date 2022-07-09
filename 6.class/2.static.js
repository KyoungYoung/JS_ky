// static 정적 프로퍼티, 메서드
// 접근제어자 - 캡슐화
// private(#) -> 내부에서 가능 외부 x , public(기본), protected
class Fruit{
    constructor(name,emoji){
        this.name = name;
        this.emoji = emoji;
    }
    // 클래스 레벨의 메서드 => this를 참조할 수 없다
    static makeRandomFruit(){
        return new Fruit('peach','🍑');

    }
    // 인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    }
}
const peach = Fruit.makeRandomFruit();
console.log(peach);
// apple은 Fruit class의 instance이다
// 클래스에 의해 만들어진 객체는 인스턴스라 부른다.
const apple = new Fruit('apple','🍎');
const banana = new Fruit('banana','🍌');
const orange = new Fruit('orange','🍊');

console.log(apple);
console.log(banana);
banana.display();
console.log(orange);