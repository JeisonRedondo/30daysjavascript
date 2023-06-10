function protectDog(dog) {
    // Tu código aquí 👈
    // Object.freeze(dog);
    const copyDog = Object.assign({}, dog);
    
    for (let key in copyDog) {
        console.log('Key: ',key);
        
        Object.freeze(copyDog[key]);
    }

    Object.freeze(copyDog);
    return copyDog;
}
const dog = {
    name: "Romeo",
    age: 3,
    owner: { name: "Victor", phoneNumber: "555-555-5555" },
    favoriteFood: ["pollito", "croquetas"],
    activities: ["jugar", "caminar"],
}; 
const result = protectDog(dog);

result.name = "Toro";
console.log('result: ', result);

result.owner.name = "Pedro";
console.log('result: ', result);
 
 