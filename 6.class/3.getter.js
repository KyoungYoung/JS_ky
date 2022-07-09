class Student{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `${this.lastName} ${this.firstName}`;
    }
    set fullName(value){
        console.log(value);
    }
}

const student = new Student('경영','김');
student.firstName = '안나';
console.log(student.fullName);
console.log(student.firstName);

student.fullName = '김경영';