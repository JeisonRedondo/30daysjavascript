class Pay {
    // Clase Base

    makePay(totalForPay) {
        return {
            realized: true,
            quantity: totalForPay
        }
    }
}

class Cash extends Pay {
    // Tu código aquí 👈
    constructor() {
        super();
    }

    makePay(totalForPay) {
        return super.makePay(totalForPay);
    }
}

class Card extends Pay {
    // Tu código aquí 👈
    constructor(cardNumber) {
        super();
        this.cardNumber = cardNumber;
    }

    makePay(totalForPay) {
        
        if (!this.cardNumber === 16) {
            // throw new Error(
            // "El numero no es correcto");
            console.log('Error');
            
        } else {
            const lastFour = this.cardNumber.slice(12, 16);
            const info = super.makePay(totalForPay);
            info.lastCardNumbers = lastFour;
            console.log('Card info; ',info);
            return info;
        }
        
    }
}

class PayPal extends Pay {
    // Tu código aquí 👈
    constructor(email) {
        super();
        this.email = email;
    }

    makePay(totalForPay) {
        const info = super.makePay(totalForPay);
        info.platform = "PayPal";
        info.email = this.email;
        console.log('Paypal info: ',info);
        
        return info;
    }
}

function processPay(method, quantity) {
    // Tu código aquí 👈
    return method.makePay(quantity);
}

const card = new Card("4913478952471122")

processPay(card, 100)
