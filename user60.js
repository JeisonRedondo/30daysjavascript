class User {
    // Tu código aquí 👈
    constructor(name, age) {
        this._name = name;
        this._age = age;
        this._friends = [];
        this._messages = [];
    }

    get name() {
        return this._name;
    }
    set name(newName) {
        newName == "" ? console.log('Nombre invalido') : this._name = newName;  
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        newAge == "" ? console.log('Edad invalida') : this._age = newAge;
    }


    addFriend(friend) {
        this._friends.push(friend);
        console.log('FriendList: ',this._friends);
        
    }
    sendMessage(message, friend) {
        this._messages.push(message);
        friend._messages.push(message);
    }
    showMessages() {
        return this._messages;
    }
}

const usuario1 = new User("Juan", 20);
const usuario2 = new User("Maria", 25);
usuario1.addFriend(usuario2);
usuario1.sendMessage("Hola Maria!", usuario2);

const messages = usuario1.showMessages();
console.log('mss: ',messages);

