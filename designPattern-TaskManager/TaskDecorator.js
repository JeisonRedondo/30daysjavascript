import { Task } from "./exercise.js";
import { TaskBuilder } from "./TaskBuilder.js";

export class TaskDecorator {
    constructor(task, options) {
        this.task = task;
        this.deadline = options.deadline;
        this.priority = options.priority;
    }

    assignUser(user) {
        this.task.assignUser(user);
    }

    completeTask() {
        this.task.completeTask();
    }

    notifyUsers() {
        task.notifyUsers();
    }
}

const task = new Task('5', 'Pasear al perro')
const taskDecorator = new TaskDecorator(task, { deadline: '2023-03-31', priority: 'alta' })
const builderTask = new TaskBuilder();

builderTask.setId(task.id);
builderTask.setDescription(task.description);
builderTask.setCompleted(task.completed);
builderTask.setUsers(task.users);
builderTask.setDeadline(taskDecorator.deadline);
builderTask.setPriority(taskDecorator.priority);



console.log("decorator: ", taskDecorator);
console.log('builder: ', builderTask instanceof Task);

