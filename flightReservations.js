class Reservation {
    constructor(flight, passenger) {
        // Tu código aquí 👈
        this.flight = flight;
        this.passenger = passenger;
    }

    reservationDetails() {
        // Tu código aquí 👈
        return {
            "origin": this.flight.origin,
            "destination": this.flight.destination,
            "date": this.flight.date,
            "reservedBy":`${this.passenger.name} ${this.passenger.lastName}`,
        }
    }
};

class Flight {
    constructor(origin, destination, date, capacity, price) {
        // Tu código aquí 👈
        this.origin = origin;
        this.destination = destination;
        this.date = date;
        this.capacity = capacity;
        this.price = price;

        this.passengers = [];
    }

    sellTicket(passenger) {
        const passengerDates = {
            fullName: `${passenger.name} ${passenger.lastName}`,
            age: passenger.age
        };

        const flightDates = {
            origin: this.origin,
            destination: this.destination,
            date: this.date,
            price: this.price,
        };

        if (this.capacity > 0) {
            this.capacity -= 1;
            this.passengers.push(passengerDates);

            passenger.flights.push(flightDates);
            const dates = {
                origin: this.origin,
                destination: this.destination,
                date: this.date,
                capacity: this.capacity,
                price:this.price
            }
            
            const reservation = new Reservation(dates, passenger);
            return reservation;
        }
    }
}

class Passenger {
    // Tu código aquí 👈
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.flights = [];
    }
}

class PremiumFlight extends Flight {
    constructor(origin, destination, date, capacity, price, specialService) {
        super(origin, destination, date, capacity, price);
        this.specialService = specialService;
    }

    sellTicket(passenger) {
        const info = super.sellTicket(passenger);
        info.flight.price += this.specialService;
        const reservation = new Reservation(info.flight, info.passenger)
        return reservation;
    }
}

class EconomicFlight extends Flight {
    constructor(origin, destination, date, capacity, price) {
        super(origin, destination, date, capacity, price);
    }

    sellTicket(passenger) {
        // Tu código aquí 👇
        const info = super.sellTicket(passenger);
        
        if (passenger.age < 18 || passenger.age > 65) {
            info.flight.price -= (info.flight.price * 20) / 100;
        }

        const reservation = new Reservation(info.flight,info.passenger)
        return reservation;
    }
}

const flight = new EconomicFlight(
    "New York",
    "Paris",
    "2023-12-25",
    100,
    200
);

const passenger = new Passenger("Pedro", "Gutierrez", 17);

const reservation = flight.sellTicket(passenger);

console.log(reservation.flight.price)
console.log(reservation.reservationDetails())
