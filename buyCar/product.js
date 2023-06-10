// import { Product } from "./exercise.js";

class Product {
    // No debes editar este archivo ❌
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    addToCart() {
        // throw new Error(
        //     "La lógica de este método debe ser implementada por las clases hijas"
        // );
    }
}

class Article extends Product {
    // Tu código aquí 👈
    constructor(name, price, quantity) {
        super(name, price, quantity);
    }

    addToCart() {
        console.log(`Agregando ${this.quantity} unidades del artículo ${this.name} al carrito`);
        // return `Agregando ${this.quantity} unidades del artículo ${this.name} al carrito`;
        
    }
}

class Service extends Product {
    constructor(name, price, quantity) {
        super(name, price, quantity);
    }

    addToCart() {
        console.log(`Agregando el servicio ${this.name} al carrito`);
        // return `Agregando el servicio ${this.name} al carrito`;
    }
}

class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(productIn) {
        this.products.push(productIn);
        productIn.addToCart();
        // console.log('List: ',this.products);
    }
    deleteProduct(incomingProduct) {
        const index = this.products.findIndex(product => product == incomingProduct);
        this.products.splice(index, 1);
        console.log('list-Remove: ',this.products);
        
    }
    calculateTotal() {
        let result = this.products.reduce((accumulator, item) => {
            accumulator += (item.price*item.quantity);
            return accumulator;
            
        },0);
        console.log('r-total: ',result);
        return result;
    }
    getProducts() {
        return this.products;
    }
}

const book = new Article("Libro", 100, 2);
const course = new Service("Curso", 120, 1);

const cart = new Cart();
cart.addProduct(book);
cart.addProduct(course);

cart.calculateTotal()

