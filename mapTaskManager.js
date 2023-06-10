export function taskManager() {
    // Tu código aquí 👈
    let mapTask = new Map();
    return {
        addTask(task, tags) {
            const taskMinus = task.toLowerCase();
            let setTags = new Set(tags);

            if (mapTask.has(taskMinus)) {
                
                let setTagMinus = mapTask.get(taskMinus);
                for (let tag of tags) {
                    setTagMinus.add(tag)
                }

                mapTask.set(taskMinus, setTagMinus);
        
            } else {                
                mapTask.set(taskMinus, setTags)
            }
        },
        printTasks() {
            return mapTask;
        }
    }
}

const myTaskManager = taskManager()
myTaskManager.addTask("Comprar leche", ["compras", "urgente"]);
myTaskManager.addTask("Sacar al perro", ["mascotas"]);
myTaskManager.addTask("Hacer ejercicio", ["salud"]);
myTaskManager.addTask("Comprar leche", ["lácteos"]);


console.log("printTasks: ",myTaskManager.printTasks());