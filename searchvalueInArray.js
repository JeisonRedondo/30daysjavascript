const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const value = 3;

function searchValue(array, value) {
    // Tu código aquí 👈

    const ubication = {
        row: 0,
        column: 0
    }

    const arrayOfFlat = array.flat();
    if (arrayOfFlat.includes(value)) {
        
        
       array.forEach(item => {
            if (item.indexOf(value) != -1) {
                console.log('Se puede');

                console.log('row:', array.indexOf(item));
                ubication.row = array.indexOf(item);

                console.log('column:', item.indexOf(value));
                ubication.column = item.indexOf(value);

            }
        });
    } else {
        // throw new Error("Valor no encontrado");
        console.log("Valor no encontrado");

    }
    return ubication
   
};

const result = searchValue(array, value);
console.log('result: ', result);
