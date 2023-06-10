const registeredUsers = [
    { name: "Pedro", lastname: "Gomez", email: "pedro@example.com" },
    { name: "Maria", lastname: "Garcia", email: "maria@example.com" },
];

const formData = {
    name: "Juan",
    lastname:"jojo",
    password: "123456",
    email: "pedro@example.comn"
};

function validateForm(formData, registeredUsers) {
    // Tú código aquí 👈
    const propierties = ["name", "lastname", "email", "password"];
    
    function datesVerify(form) {

        const missingValue = new Array();
        propierties.forEach(value => {
            if (!form[value]) {
                missingValue.push(value);
            }
        });
  
            if (missingValue.length > 0) {
                throw new Error("Faltan los siguientes campos: ", ...missingValue);
                // console.log("Faltan los siguientes campos: ", ...missingValue);
                
            } else {
                return true;
            } 

    }

    function emailVerify(form) {
        const isRegistered = registeredUsers.every(user => user.email != form.email);
        if (!isRegistered) {
            throw new Error("El email ya esta registrado");
            // console.log("El email ya esta registrado");
        } else {
            return true;
        }  
    }
  
    const dates = datesVerify(formData);
    const email = emailVerify(formData);

    if (dates && email == true) {
        const registerUser =JSON.parse(JSON.stringify(formData));
        delete registerUser.password;

        registeredUsers.push(registerUser);
        return (`Tu registro fue exitoso ${registerUser.name} ${registerUser.lastname}`);
        
    }
    console.log('LisUsers :',registeredUsers);
    

}

validateForm(formData, registeredUsers);