import { Task } from "./exercise.js";

export class TaskManager {
    constructor() {
        this.tasks = [];
    }

    static getInstance() {
        
        if (!TaskManager.instance) {
            TaskManager.instance = new TaskManager();
        }
        return TaskManager.instance;
    }

    addTask(task) {
        if (task instanceof Task) {
            this.tasks.push(task);
        } else {
            console.log(`La tarea ${task.description} no sirve.`);
            // throw new Error("No autorizado");
        }

    }

    getTasks() {
        return this.tasks;
    }

    getTaskById(id) {
        const result = this.tasks.find(task => task.id == id);
        return result == undefined ? null : result;
    }
}

const taskManager = TaskManager.getInstance();
console.log('taskm: ',taskManager);

const mockTask = new Task(1, "Mock task")
console.log('mock: ',mockTask);

taskManager.addTask(mockTask);
console.log(taskManager.getTasks())
