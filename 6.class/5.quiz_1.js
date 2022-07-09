// counter make!
// 0 이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터 만들기
// Counter Class make

class Counter{
    constructor(num){
        this.num = num;
        if(num < 0 || isNaN(num)){
            console.log('0 이상의 숫자를 입력해주세요');
        } 
    }
    get increase(){
        for( let i = 0; i < this.num; i++){
            console.log(i);
        }
    }
}

const counter = new Counter(2);
counter.increase;