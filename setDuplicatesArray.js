export function removeDuplicates(values) {
    // Tu código aquí 👈
    let setForFilter = new Set();

    values.forEach(value => setForFilter.add(value));

    return Array.from(setForFilter);

}
const fruits = [
    "melon",
    "melon",
    "mango",
    "banana",
    "apple",
    "banana",
    "apple",
];

console.log(removeDuplicates(fruits))

const numbers = [1, 2, 3, 1, 2, 3];

console.log(removeDuplicates(numbers))
