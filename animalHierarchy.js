 class Animal {
    // Tu código aquí 👈
     constructor(name, age, species) {
         this.name = name;
         this.age = age;
         this.species = species;
     }

     getInfo() {
         return {
             name: this.name,
             age: this.age,
             specie: this.species
         }
     }
}

class Mammal extends Animal {
    // Tu código aquí 👈
    constructor(name, age, species,hasFur) {
        super(name, age, species);
        this.hasFur = hasFur;
    }

    getInfo() {
        const info = super.getInfo();
        info.hasFur = this.hasFur;
        return info;
    }
}
 class Dog extends Mammal{
    // Tu código aquí 👈
     constructor(name, age, breed, hasFur) {
         super(name, age,"dog", hasFur);
         this.breed = breed;
     }

     getInfo() {
         const info = super.getInfo();
         info.breed = this.breed;
         return info;
     }

     bark() {
         return "woof!";
     }
}

const dog = new Dog("fido", 4, "pastor aleman", true);
console.log('Info: ',dog.getInfo());

console.log(dog.bark())

