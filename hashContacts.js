export class ContactList {
    constructor(size) {
        this.buckets = new Array(size);
        this.numBuckets = this.buckets.length;
    }

    hash(name) {
        let total = 0;
        
        total += name.charCodeAt(0);
        return total % this.numBuckets;
    }

    insert(name, phone) {
        const index = this.hash(name);
        console.log(`index-${name}: ${index}`);
        
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        this.buckets[index].push([name, phone]);

    }

    get(name) {
        const index = this.hash(name);

        let searched = 0;

        this.buckets.forEach(item => {
            searched = item.find(user => user[0] === name);    
        })
        
        console.log('searched: ', searched);
        if (searched != undefined){
            return searched[1] || null;
        }    
    }

    retrieveAll() {
        const retrieveArray = [];
        this.buckets.forEach(item => {
            item.forEach(user => {
                retrieveArray.push(user);
            })
            
        })

        return retrieveArray;

    }

    delete(name) {
        const index = this.hash(name);

        if (!this.buckets[index].find(user => user[0] === name)) {
            return null;
        } else {
            const userIndex = this.buckets[index].findIndex(item => item[0] === name)
            console.log('indexDelete: ',userIndex);
            
            this.buckets[index].splice(userIndex, 1); 
        }
    }
}

const contactList = new ContactList(10)
contactList.insert("Mr Michi", "123-456-7890")
contactList.insert("Mr firulais", "555-555-5556",)

console.log("del: ", contactList.delete("Mr firulais"))
console.log("get: ", contactList.get("Mr Michi"))

console.log("all: ", contactList.retrieveAll());

