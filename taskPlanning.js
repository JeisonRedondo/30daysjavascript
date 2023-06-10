function createTaskPlanner() {
    // Tu código aquí 👈

/*Mi lista */
    let taskList = [
        {
            id: 1,
            name: "Comprar leche",
            completed: false,
            priority: 1,
            tags: ["shopping", "home"]
        }, {
            id: 2,
            name: "Llamar a Juan",
            completed: true,
            priority: 3,
            tags: ["personal"]
        },
    ];

/* Funciones */

    const findInTaskListBy = (filterFunc, recognitionValue) => {

        let result = taskList.reduce((accumulator, task) => {

            const findedTask = filterFunc(recognitionValue, task);
            if (findedTask != undefined) {
                accumulator = [...accumulator, findedTask];
            }

            return accumulator;
        }, []);

        return result;
    };
    
    function idOrNameOfTask(idOrName, task) {
        // const taskValues = Object.values(task);
        // console.log('prueba en idorname: ',taskValues);
        
        if (task.id == idOrName || task.name == idOrName) {
            return task;
        }
    };

    function completedTask(trueOrFalse, task) {
        
        if (task.completed == trueOrFalse) {
            return task;
        }
    };
    function tagInclude(searchedTag, task) {
        
        if (task.tags.includes(searchedTag)) {
            return task;
        }
    };


/*Inicio de Return */
    return {
        addTask(task) {
            task["completed"] = false;
            taskList.push(task);
            // console.log("Lista de tareas: ", taskList);
        },
        removeTask(value) {
            const idRemoveTask = findInTaskListBy(idOrNameOfTask, value);
            // console.log('RemoveTask: ',idRemoveTask);
            idRemoveTask == undefined ? console.log('No hemos encontrado la tarea')
                : taskList.splice(idRemoveTask, 1);
            
            // console.log(`Eliminado objeto con el id ${idRemoveTask[0].id}`, taskList);
        },
        getTasks() {
            // console.log("Lista de tareas: ", taskList);
            return taskList;
        },
        getPendingTasks() {
            const pendingTaskArray = findInTaskListBy(completedTask, false);
            // console.log('Pending Task: ', pendingTaskArray);

            return pendingTaskArray;
        },
        getCompletedTasks() {
            const completedTaskArray = findInTaskListBy(completedTask, true);
            // console.log('Completed Task: ', completedTaskArray);

            return completedTaskArray;
        },
        markTaskAsCompleted(value) {
            const findedTask = findInTaskListBy(idOrNameOfTask, value);
            const indexUp = taskList.indexOf(findedTask[0]);

            taskList[indexUp].completed = true;
            // console.log("Lista de tareas: ", taskList);
        },
        getSortedTasksByPriority() {
            const taskListCopy = [...taskList];
            const sortedTaskList = taskListCopy.sort((valueA, valueB) => { return valueA.priority - valueB.priority });
            // console.log('List Sorted: ',sortedTaskList);
            return sortedTaskList;
        },
        filterTasksByTag(tag) {
            const filteredTaskArray = findInTaskListBy(tagInclude, tag);
            // console.log('Task that include this tag: ', completedTaskArray);
            return filteredTaskArray;
        },
        updateTask(taskId, updates) {
            let updatedTask = findInTaskListBy(idOrNameOfTask, taskId);
            const indexUp = taskList.indexOf(updatedTask[0]);
            
            taskList[indexUp] = { ...updatedTask[0], ...updates };

            // console.log('index: ', indexUp);            
            // console.log("Lista de tareas: ", taskList);
        },
    };
}

const object = {
    id: 3,
    name: "Comer saludable",
    priority: 2,
    tags: ["personal","Health"]
}

const Get = createTaskPlanner();
// Get.addTask(object);
// Get.getTasks();
// Get.removeTask("Comprar leche");
// Get.getTasks();
// Get.getPendingTasks();
// Get.getCompletedTasks();
// Get.markTaskAsCompleted("Comprar leche");
// Get.getSortedTasksByPriority();
console.log(Get.filterTasksByTag("shopping"));
// Get.updateTask(2, {
//     name: "Soy Jeison",
//     tags: ["personal", "Ocio"]
// });
