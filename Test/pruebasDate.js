
const reservations = [
    {
        id: 1,
        name: "John Doe",
        checkIn: "01/04",
        checkOut: "02/04",
        roomNumber: 1,
    },
    {
        id: 2,
        name: "Pepe Doe",
        checkIn: "01/01",
        checkOut: "02/01",
        roomNumber: 7,
    },
    {
        id: 3,
        name: "Pepe Doe",
        checkIn: "02/01",
        checkOut: "02/01",
        roomNumber: 7,
    },
    {
        id: 4,
        name: "Pepe Doe",
        checkIn: "02/06",
        checkOut: "02/01",
        roomNumber: 7,
    },
    {
        id: 5,
        name: "Pepe Doe",
        checkIn: "04/12",
        checkOut: "02/01",
        roomNumber: 7,
    },
    {
        id: 6,
        name: "Pepe Doe",
        checkIn: "06/01",
        checkOut: "08/01",
        roomNumber: 7,
    },{
        id: 7,
        name: "John Doe",
        checkIn: "04/04",
        checkOut: "10/04",
        roomNumber: 1,
    },
    {
        id: 8,
        name: "Pepe Doe",
        checkIn: "04/03",
        checkOut: "08/03",
        roomNumber: 7,
    }
]

function generateDate(string) {
    const arrayDate = string.split("/");
    const year = new Date().getFullYear();

    const [day, month] = [...arrayDate];
    // console.log(`Generando Fechas -> Dia:${day} - Mes:${month} - Año:${year}`);

    return new Date(year, month, day);
}

function sortReservations(array,reservationForAdding) {
    const sortArray = [...array];

    const findRoom = sortArray.reduce((accumulator, item) => {
        if (item.roomNumber == reservationForAdding.roomNumber) {
            accumulator = [...accumulator, item];
        }
        return accumulator;
    }, []);

    function isAvailable(reservation) {


        let result = true;

        const reservIn = reservation.checkIn;
        const reservOut = reservation.checkOut;

        sortedFIndiArray.forEach(room => {
            const roomIn = room.checkIn;
            const roomOut = room.checkOut;

            if ((reservIn >= roomIn && reservIn < roomOut)
                || (reservOut > roomIn && reservOut <= roomOut)
                ||(reservIn <= roomIn && reservOut >= roomOut)) {
                result = false
            }
        })
        return result;
    }
    
    const sortedFIndiArray = findRoom.sort((roomA, roomB) => {
        return generateDate(roomA.checkIn) - generateDate(roomB.checkIn);
    });

    console.log('Sorted Array: ', sortedFIndiArray);

    let result = true;

    sortedFIndiArray.forEach(reservation => {
        const response = verifyEntry(reservation, reservationForAdding);
        // console.log(`Response for ${reservation.checkIn} and ${reservation.checkOut}: ${response}`);
        result = response;
    });




    return result;

    
}
const reserv = {
    id: 1,
    name: "John Doe",
    checkIn: "03/04",
    checkOut: "04/04",
    roomNumber: 7,
};

sortReservations(reservations, reserv);



// const resultSort = hotel.getSortReservations();
// console.log('Reservations: ', resultSort);

// const resultAdd = hotel.addReservation(reserv);
// console.log('Adding Reservations: ', resultAdd);