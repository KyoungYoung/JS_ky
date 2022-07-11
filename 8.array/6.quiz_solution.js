// quiz 1

let replace = (array) =>{
    const replaced = Array.from(array);
    for(let i = 0; i < replaced.length; i++){
        if(replaced[i] === '🍓'){
            replaced[i] = '🥝';
        }
    }
    return replaced;
}
const array = ['🍌','🍓','🍇','🍓'];
const result = replace(array);
console.log(result);