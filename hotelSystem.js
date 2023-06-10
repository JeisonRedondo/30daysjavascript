
const reservationsList = [
    {
        id: 1,
        name: "John Doe",
        checkIn: "01/04",
        checkOut: "02/01",
        roomNumber: 1,
    },
    {
        id: 2,
        name: "Pepe Doe",
        checkIn: "01/01",
        checkOut: "02/01",
        roomNumber: 5,
    },
    {
        id: 3,
        name: "Pepe Doe",
        checkIn: "02/01",
        checkOut: "02/01",
        roomNumber: 1,
    },
    {
        id: 3,
        name: "Pepe Doe",
        checkIn: "02/01",
        checkOut: "02/01",
        roomNumber: 10,
    },
    {
        id: 4,
        name: "Pepe Doe",
        checkIn: "02/01",
        checkOut: "02/01",
        roomNumber: 3,
    },
    {
        id: 5,
        name: "Pepe Doe",
        checkIn: "04/07",
        checkOut: "10/07",
        roomNumber: 2,
    },
    {
        id: 6,
        name: "Pepe Doe",
        checkIn: "06/01",
        checkOut: "02/01",
        roomNumber: 3,
    }
];

function hotelSystem(rooms) {

    // const reservationsList = [];

    function generateDate(string) {
        const arrayDate = string.split("/");
        const year = new Date().getFullYear();

        const [day, month] = [...arrayDate];
        // console.log(`Generando Fechas -> Dia:${day} - Mes:${month} - Año:${year}`);

        return new Date(year, month, day);
    }

    function isAvailable(reservation, array) {

        let result = true;
        const reservationIn = reservation.checkIn;
        const reservationOut = reservation.checkOut;

        array.forEach(room => {
            const roomIn = room.checkIn;
            const roomOut = room.checkOut;

            if ((reservationIn >= roomIn && reservationIn < roomOut) ||
                (reservationOut > roomIn && reservationOut <= roomOut) ||
                (reservationIn <= roomIn && reservationOut >= roomOut)) {
                console.log('Available False');
                
                result =  false;
            } 
        });
        return result;
    }

    return {
        searchReservation(id) {
            const searchedRoom = reservationsList.find(room => room.id === id);
            if (searchedRoom) {
                return searchedRoom;
            } else {
                // throw new Error("La reservación no fue encontrada");
                console.log('La reservación no fue encontrada');
            }
        },
        getSortReservations() {
            const sortArray = [...reservationsList];

            sortArray.sort((roomA, roomB) => {
                return generateDate(roomA.checkIn) - generateDate(roomB.checkIn);
            });

            return sortArray;
        },
        addReservation(reservation) {

            const roomList = reservationsList.filter(room => room.roomNumber === reservation.roomNumber);
            
            if (!isAvailable(reservation, roomList)) {
                // throw new Error("La habitación no está disponible");
            }
            reservationsList.push(reservation);
            
            return 'Reserva exitosa';
        },
        removeReservation(id) {
            let index = reservationsList.findIndex((room) => room.id === id);
            if (index > -1) {
                return reservationsList.splice(index, 1)[0];
            } else {
                throw new Error("La reservación que se busca remover no existe");
            }
        },
        getReservations() {
            return reservationsList;
        },
        getAvailableRooms(checkIn, checkOut) {

            const availableRooms = [];

            for (let index = 1; index <= rooms; index++) {
                console.log('in: ', checkIn, ' out: ', checkOut, ' room: ', index);
                
                const roomList = reservationsList.filter(room => room.roomNumber === index);
                console.log('roomList: ',roomList);
                
                let reservation = { checkIn, checkOut ,roomNumber :index}
                
                if (isAvailable(reservation, roomList) == true) {
                    availableRooms.push(index)
                }
            }
            return availableRooms;

        },

    };
};

const reserv = {
    id: 11,
    name: "Pepe Doe",
    checkIn: "06/01",
    checkOut: "22/01",
    roomNumber: 2,
}


// const resultGet = hotel.getReservations();
// console.log('Reservations: ', resultGet);

// const resultSearch = hotel.searchReservation(2);
// console.log('Reservations: ', resultSearch);

// const resultSort = hotel.getSortReservations();
// console.log('Reservations: ', resultSort);



// const removeReservation = hotel.removeReservation(5);
// console.log('removeReservation: ',removeReservation);


// const addReservation = hotel.addReservation(reserv);
// console.log('Add: ', addReservation);

const hotel = hotelSystem(10);
const available = hotel.getAvailableRooms("07/01", "22/01");
console.log('Available: ',available);

