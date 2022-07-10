// quiz 1

function replace(array) {
    const replaced = Array.from(array);
    for(let i = 0; i < replaced.length; i++){
        if(replace[i] === '🍓'){
            replaced[i] = '🥝';
        }
    }
}