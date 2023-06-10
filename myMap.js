function myMap(array, func) {
    // Tu código aquí 👈

    let result = [];

    array.forEach(element => {
         
        console.log(func(element));
        
        result.push(func(element))
     })
    
    return result;
    
}

const numeros = [1, 2, 3, 4];

const final1 = myMap(numeros, (num) => num * 2);
const final2 = myMap([
    { name: "michi", age: 2 },
    { name: "firulais", age: 6 }],
    (pet) => pet.name);

console.log('Final 1 :', final1);
console.log('Final 2 :', final2);
