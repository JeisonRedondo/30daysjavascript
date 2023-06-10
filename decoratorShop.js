class Product {
    // Este código no debe ser editado ❌
    constructor(price) {
        this.price = price;
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        throw new Error("Este método debe ser implementado en las subclases");
    }
}

class BasicProduct extends Product {
    constructor(price, product) {
        super(price);
        this.product = product;
    }

    getDescription() {
        return this.product;
    }
}

class WarrantyDecorator extends Product {
    constructor(basicProduct) {
        super();
        this.price = basicProduct.price += 20;
        this.product = basicProduct.product + " con garantía";
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.product;
    }
}

class ShippingInsuranceDecorator extends Product {
    constructor(basicProduct) {
        super();
        this.price = basicProduct.price += 20;
        this.product = basicProduct.product + " con seguro de envío";
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.product;
    }
}

const basicProduct = new BasicProduct(5000, "Refrigerador");
const withShippingInsurance = new ShippingInsuranceDecorator(basicProduct);
console.log(withShippingInsurance.getPrice());
console.log(withShippingInsurance.getDescription());