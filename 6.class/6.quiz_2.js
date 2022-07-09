/** 정직원과 파트타임 직원을 나태내는 클래스
 * 직원들의 정보: 이름, 부서이름, 한달 근무 시간
 * 매달 직원들의 정보를 이용하여 한달 월급을 계산할 수 있다
 * 정직원은 시간당 10000원
 * 파트타임 직원은 시간당 8000원
 */

class Employee{
    constructor(name,place,time,payRate){ 
        this.name = name;
        this.place = place;
        this.time = time;
        this.payRate = payRate;
    }
    get money(){
        // return this.time * this.payRate;
        console.log(this.time * this.payRate);
    }
}

class FullEmployee extends Employee{
    static #PayRate = 10000;
    constructor(name,place,time){
        super(name,place,time,FullEmployee.#PayRate);
    }
}
class PartTimeEmployee extends Employee{
    static #PayRate = 8000;
    constructor(name,place,time){
        super(name,place,time,PartTimeEmployee.#PayRate);
    }
}
const meenee = new FullEmployee('혜민','서빙',80);
console.log(meenee);
meenee.money;

const pongo = new PartTimeEmployee('경영','주방',50);
console.log(pongo);
pongo.money;

