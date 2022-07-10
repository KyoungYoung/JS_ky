const pizza = {name:'🍕',price: '1'};
const ramen = {name:'🍜',price:'2'};
const sushi = {name:'🍣',price:'3'};

const store1 = [pizza,ramen];
const store2 = Array.from(store1); // copy
console.log('store1',store1);
console.log('store2',store2);

store2.push(sushi); // add
console.log('store1',store1);
console.log('store2',store2);

pizza.price = 4;
console.log('store1',store1);
console.log('store2',store2);
