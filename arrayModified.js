function arrayModified() {
    // Tu código aquí 👈
    Array.prototype.myFilter = function (callback) {
        const result = [];
        for (let index = 0; index < this.length; index++) {
            const element = this[index];
            if (callback(element)) {
                result.push(element);
            }
            
        }
        return result;
    }
}
arrayModified()

const array = [1, 2, 3, 4, 5, 6]
const arr = [
    {
        name: "Juan",
        age: 10,
    },
    {
        name: "Pedro",
        age: 20,
    },
    {
        name: "Maria",
        age: 30,
    },
];

const result = array.myFilter(num => num % 2 === 0);
const result2 = arr.myFilter((person) => person.age > 18);

console.log('Result: ', result);
console.log('Result2: ', result2);
