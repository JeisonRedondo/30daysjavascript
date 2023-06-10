function doTask1() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Task 1'), 300);
    });
    return promise;
}

function doTask2() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Task 2'), 300);
    });
    return promise;
}

function doTask3() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Task 3'), 300);
    });
    return promise;
}


async function runCode() {
    const strings = [];
    
   return doTask1()
        .then(response => {
            strings.push(response)
            return doTask2();
    })
        .then(response => {
            strings.push(response)
            return doTask3();
    })
        .then(response => {
            strings.push(response)
            return strings;
    })
    
    // const data1 = await doTask1();
    // const data2 = await doTask2();
    // const data3 = await doTask3();

    // strings.push(data1);
    // strings.push(data2);
    // strings.push(data3);

    // return strings;
}
async function eject() {
    
    const result = await runCode();
    console.log('result: ', result);
}


eject();