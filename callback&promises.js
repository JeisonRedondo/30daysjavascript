async function doTask1() {
    const promise = new Promise((resolve, reject) => {
        (setTimeout(() => resolve('Task 1'), 300));
    });
    return promise;
}

async function doTask2() {
    const promise = new Promise((resolve, reject) => {
        (setTimeout(() => resolve('Task 2'), 300));
    });
    return promise;
}

async function doTask3() {
    const promise = new Promise((resolve, reject) => {
        (setTimeout(() => resolve('Task 3'), 300));
    });
    return promise;
}



async function recibe(item) {
    console.log('recive: ', item);
    return item;
}

function runCode() {
    const strings = [];

  
   
        return doTask1()
            .then(response => {
                strings.push(response);
                return doTask2();
            })
            .then(response => {
                strings.push(response)
                return doTask3();
            })
            .then(response => {
                strings.push(response)
                return strings
            })
        

}
runCode()
    .then(response => console.log("response Final: ", response));

