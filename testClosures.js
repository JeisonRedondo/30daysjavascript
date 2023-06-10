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

const findInTaskListBy = (filterFunc, recognitionValue) => {

    let result = taskList.reduce((accumulator, task) => {

        const findedTask = filterFunc(recognitionValue, task);
        console.log('testFinded: ', findedTask);
        
        if (findedTask != undefined) {
            accumulator = [...accumulator, findedTask];
        }

        return accumulator;

    }, [])
    
    return result;
};


function idOrNameOfTask (idOrName, task) {

    let resultTask = {};
    const taskValues = Object.values(task);

    if (taskValues.includes(idOrName)) { 
        resultTask = task;
        console.log('Existe 1?: ', resultTask);
        return resultTask;
    }
};

const aver = findInTaskListBy(idOrNameOfTask, "Comprar leche");
console.log('A ver: ', aver);




