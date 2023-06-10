const products = [
    { name: "product1", price: 10, inStock: true },
    { name: "product2", price: 20, inStock: false },
    { name: "product3", price: 15, inStock: true },
    { name: "product4", price: 5, inStock: false },
];

function sortByAvailabilityAndPrice(products) {
    // Tu código aquí 👈
    let productsList = [...products];

    const arrayTrue = [];
    const arrayFalse = [];

    productsList.forEach(product => {

        if (product.inStock === true) {
            arrayTrue.push(product)
        } else {
            arrayFalse.push(product)
        }
    });

    arrayTrue.sort((a, b) => a.price - b.price);
    arrayFalse.sort((a, b) => a.price - b.price);

    // console.log('ArrayA: ', arrayTrue);
    // console.log('ArrayB: ', arrayFalse);


    productsList = [...arrayTrue, ...arrayFalse];
    // console.log('list: ', productsList);


    return productsList;

}

sortByAvailabilityAndPrice(products)