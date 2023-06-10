import { Mail } from "./mail.js";

export class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    constructMailOb(mail) {
        return {
            from: mail.from,
            to: mail.to,
            body: mail.body,
            subject:mail.subject
        }
    }

    enqueue(from, to, body, subject) {
        // Tu código aquí 👈🏻
        let newMail = new Mail(from, to, body, subject);

        if (this.length === 0) {
            this.first = newMail;
            this.last = newMail
        } else {
            this.last.next = newMail;
            this.last = newMail;
        }
        this.length++;
    }

    dequeue() {
        if (this.length === 0) {
            // throw new Error("La queue está vacía");
            console.log("La queue está vacía");
            return;
        }

        let removedMail = this.first;

        if (this.first === this.last) {
            this.last = null;
        }

        this.first = this.first.next;
        console.log('first: ',this.first);
        
        this.length--;

        return this.constructMailOb(removedMail);

    }

    peek() {
        return this.constructMailOb(this.first);
    }

    size() {
        return this.length
    }
}

const emailQueue = new Queue();

emailQueue.enqueue(
    'jane@ejemplo.com',
    'support@ejemplo.com',
    'No puedo iniciar sesión en mi cuenta',
    'Problema de inicio de sesión'
);

emailQueue.enqueue(
    'joe@ejemplo.com',
    'support@ejemplo.com',
    'Mi pedido no ha llegado todavía',
    'Estado del pedido'
);

console.log("dequeue: ",emailQueue.dequeue())
console.log("peek: ", emailQueue.peek())
console.log("size: ", emailQueue.size())