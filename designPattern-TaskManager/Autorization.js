import { User } from "./User.js";
import { Task } from "./exercise.js";

export class Authorization {
    checkAuthorization(incomingUser, task) {
        const result = task.users.find( element => element.name == incomingUser.name);
        if (result == undefined) {
            // throw new Error("No autorizado");
            console.log('No Autorizado');
        }
        return true;
    }
}

const authorization = new Authorization()
const user1 = new User("Juan")
const user2 = new User("Maria")
const task = new Task('4', 'Comprar pan')
task.assignUser(user1)

console.log(authorization.checkAuthorization(user2, task))
