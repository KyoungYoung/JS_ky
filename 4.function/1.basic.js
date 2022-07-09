function add(num1,num2){
    return num1 + num2;
}
console.log(add(1,3));
// let lastName = "김";
// let firstName = "경영";
// let fullName = `${lastName + firstName}`;
// console.log(fullName);

function fullName(lastName,firstName){
    return `${firstName + lastName}`;
}

const result = fullName('김','경영');
console.log(result);

