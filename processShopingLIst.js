const shoppingList = [
    { name: "pan", price: 20, quantity: 2 },
    { name: "leche", price: 25, quantity: 1 },
    { name: "oferta manzanas", price: 10, quantity: 3 },
]

function processShoppingList(list) {
    // Tu código aquí 👈

    function discount(value){
        const discountValue = (value * 20) / 100;
        // console.log('discount: ', discountValue);

        const finaValue = value - discountValue;
        // console.log('Final Value: ', finaValue);
        
        
        return finaValue;
    };

    function generateDiscount(product) {
        const nameOfProduct = product.name+"";
        // console.log('name: ', nameOfProduct);
        
        const isDiscountable = nameOfProduct.search("oferta");
        // console.log('Aplica al descuento?: ', isDiscountable);

        if (isDiscountable != -1) {
            product.price = discount(product.price);
        }
    };

    const totalProducts = list.reduce((totalProducts, product) => {

        product.price = product.price * product.quantity;
        generateDiscount(product);

        delete product.quantity;

        return totalProducts + product.price;

    },0)

    return totalProducts;
}


const totalProducts = processShoppingList(shoppingList)

console.log('Total Products: ',totalProducts);
console.log("List of Products: ",shoppingList)