const fruits = ['π','π','π','π'];

// λ°°μ΄ μμ΄νμ μ°Έμ‘°νλ λ°©λ²
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// μΆκ°, μ­μ νλ λ°©λ² 
fruits[4] = 'π'; // μ’μ§ μμ λ°©μ
fruits[fruits.length]= 'π';
console.log(fruits);

delete fruits[1]; // μ’μ§ μμ λ°©μ
console.log(fruits);

fruits.pop(1);
console.log(fruits);