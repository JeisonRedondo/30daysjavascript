export class MyArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }

    sortier() {
        const values = Object.values(this.data);
        const newMyArray = new MyArray();

        for (let index = 0; index < this.length; index++) {
            newMyArray.data[index] = values[index];
        }

        this.data = newMyArray.data;
    }

    map(func) {
        let resultObject = new MyArray();

        for (let element in this.data) {
            resultObject.data[element] = func(this.data[element]);
            resultObject.length++;
        }
        return resultObject;
    }

    filter(func) {
        let resultObject = new MyArray();

        for (let element in this.data) {
            if (func(this.data[element])) {
                resultObject.data[resultObject.length] = this.data[element];
                resultObject.length++;
            }
        }
        return resultObject;
    }

    push(inputItem) {
        this.data[this.length] = inputItem;
        this.length++;

        return this.length;
    }

    pop() {
        const index = this.length - 1
        const result = this.data[index];

        delete this.data[index];
        this.length--;

        console.log('pop: ', result);

        return result;
    }

    join(character = ",") {
        let concatString = "";
        const entriesData = Object.entries(this.data);
        for (let [propiedad, valor] of entriesData) {
            concatString += `${valor}`
            if (Number(propiedad) != (this.length - 1)) {
                concatString = concatString + character;
            }
        }
        return concatString;
    }

    shift() {
        const result = this.data[0];

        delete this.data[0];
        this.length--;

        console.log('shift: ', result);

        this.sortier();

        return result;
    }

    unshift(item) {

        if (!item && item !== 0) {
            return this.length;
        }else{
            const valueLenght = this.length
            const listValues = Object.values(this.data);
            let unshiftObject = {};

            for (let index = 0; index <= valueLenght; index++) {

                if (index == 0) {
                    unshiftObject[index] = item;

                } else {
                    unshiftObject[index] = listValues[index - 1];
                }
            }
            this.data = unshiftObject;
            this.length++;
        }

        return this.length;
    }
}




const myArray = new MyArray()

myArray.push(1);
myArray.push(2);
myArray.push(3);
// myArray.pop();


// myArray.shift();

console.log(myArray.join("/"))
console.log("map: ", myArray.map(item => item * 2));

console.log("data: ", myArray.data);
console.log("length: ", myArray.lenght);

console.log(myArray.unshift("Hola!"));
console.log("data: ", myArray.data);

