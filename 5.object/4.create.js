// const banana = {
//     name: 'banana',
//     display: function(){
//         console.log(`${this.name} : 🍌`);
//     },
// };

// banana.display();

// const orange = {
//     name: 'orange',
//     display: function(){
//         console.log(`${this.name}: 🍊`);
//     },
// };

// orange.display();

// 생성자 함수
function Fruit(name,emoji){
    this.name = name;
    this.emoji = emoji;
   
    this.display = () => {
        console.log(`${this.name}: ${this.emoji}`);
    };
    //return this; 생략가능
}

const apple = new Fruit('apple','🍎');
const orange = new Fruit('orange','🍈');
console.log(apple);
console.log(orange);
apple.display();