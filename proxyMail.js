class Messages {
    // No debes editar este código ❌
    constructor() {
        this.history = [];
    }

    sendMessage(text) {
        this.history.push(text);
    }

    getHistory() {
        return this.history;
    }
}

class MessagesProxy {
    constructor(messages, user) {
        this.messages = messages;
        this.user = user;
    }

    sendMessage(text) {
        if (this.user.isLoggedIn()) {
            this.messages.sendMessage(text);
        } else {
            // throw new Error("Usuario no registrado");
            console.log("Usuario no registrado");  
        }
    }

    getHistory() {
        if (this.user.isLoggedIn()) {
            return this.messages.getHistory();
        } else {
            // throw new Error("Usuario no registrado");
            console.log("Usuario no registrado");
        }
    }
}

class User {
    constructor(name) {
        // Tu código aquí 👈
        this.name = name;
        this.status = false;
    }

    login() {
        this.status = true;
        return this;
    }

    logout() {
        this.status = false;
        return this;
    }
    
    isLoggedIn() {
        return this.status;
    }
}

const user = new User("John")
const messages = new Messages()
const messagesProxy = new MessagesProxy(messages, user)

messagesProxy.sendMessage("Hola")
