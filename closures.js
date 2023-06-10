
function createCalculator(totalValue) {
    // Tu código aquí 👈
    let total = 0 || totalValue;

    return {
        add(valor) {
            total += valor;
            return total;
        },
        subtract(valor) {
            total -= valor;
            return total;
        },
        multiply(valor) {
            total *= valor;
            return total;
        },
        divide(valor) {
            total /= valor;
            return total;
        },
        clear() {
            total = 0;
            return total;
        },
        getTotal(valor) {
            total;
            return total;
        },
    };
        
    
}

const calculator = createCalculator(10);

console.log("add: ",calculator.add(10));
console.log("clear : ",calculator.clear());
console.log("add: ",calculator.add(5));
console.log("substract: ", calculator.subtract(-10));
console.log("multiply: ", calculator.multiply(3));


