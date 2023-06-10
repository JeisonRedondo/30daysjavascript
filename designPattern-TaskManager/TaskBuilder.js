import { Task } from "./exercise.js";


export class TaskBuilder {
    constructor() {

        this.id = 0;
        this.description = "";
        this.completed = false;
        this.users = [];
        this.deadline = "",
        this.priority = ""
    }

    setId(id) {
        this.id = id
    }

    setDescription(description) {
        this.description = description;
    }

    setCompleted(completed) {
        this.completed = completed;
    }

    setUsers(users) {
        this.users = [...users];
    }

    setDeadline(deadline) {
        this.deadline = deadline
    }

    setPriority(priority) {
        this.priority = priority;
    }

    build() {
        const preTask = new Task(this.id, this.description);
        preTask.completed = this.completed;
        preTask.users = this.users;
        preTask.deadline = this.deadline;
        preTask.priority = this.priority;

        return preTask;
    }
}