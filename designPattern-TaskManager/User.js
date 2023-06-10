export class User {
    constructor(name) {
        this.name = name;
    }

    notify(task) {
        console.log(`La tarea ${task.description} ah sido completada.`); 
    }
}