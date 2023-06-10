const productsList = [
    { name: "Smartphone", category: "Electronics", price: 800 },
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Shirt", category: "Clothing", price: 50 },
    { name: "Pants", category: "Clothing", price: 100 },
];

// --agrupar productos por categoria--
// 1 - la funcion retornara un objeto con dos propiedades:

// products:string de los nombres de los productos separados por comas
// totalPrice: contiene la suma total de los precios de los productos

function groupProducts(products, selectedCategory) {

    const productsWithCategory = new Array();
    let totalPrice = 0;

    products.forEach( item => {
        if (item.category == selectedCategory) {
            // console.log('Product: ',item);
            productsWithCategory.push(item.name);
            totalPrice += item.price
        }
    });
    // console.log('productsSelects: ', productsWithCategory);
    // console.log('Total: ',totalPrice);

    return {
        "products": productsWithCategory.join(", "),
        "totalPrice":totalPrice
    }
    
};

const result = groupProducts(productsList, "Clothing");
console.log('Result: ', result);
