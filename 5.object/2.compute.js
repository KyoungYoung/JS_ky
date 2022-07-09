const obj = {
    name : '경영',
    age : 25
};
// 코딩하는 시점에, 정적으로 접근이 확정됨
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을 때 대괄호 표기법 사용한다.
function getValue(obj,key){
    return obj[key];

}
console.log(getValue(obj,'name'));
console.log(getValue(obj,'age'));

// 추가할 때
function addKey(obj,key,value){
    obj[key] = value;
}
addKey(obj,'job','develpor');
console.log(obj['job']);

// 삭제할 때
function deleteKey(obj,key){
    delete obj[key];
}
deleteKey(obj,'job');
console.log(obj);