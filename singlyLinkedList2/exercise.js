import { Node } from "./Node.js";

export class PatientList {
    constructor(beds) {
        this.beds = beds;
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    sortier() {
        let pass = this.head;
        let count = this.head.bedNumber;
        while (pass) {
            pass.bedNumber = count;
            pass = pass.next;
            count++;
            if (count > this.beds) {
                count = 1;
            }
            
        }
    }

    addPatient(name, age) {
        if (this.length >=this.beds) {
            // throw new Error( "No hay camas disponibles")
            console.log("No hay camas disponibles"); 
        }

        this.length++;

        let patient = new Node(name, age, this.length);
        if (!this.tail) {
            this.head = patient;
            this.tail = patient;
        } else {
            this.tail.next = patient;
            this.tail = patient;
        }
        this.sortier();
    }

    removePatient(name) {
        if (!this.head) {
            return null;
        }
        if (this.head.name == name) {
            this.head = this.head.next;
            this.length--;
            this.sortier();
            return;
        }

        let passingPatient = this.head;
        while (passingPatient.next) {
            
            if (passingPatient.next.name == name) {
                console.log('eliminando :',passingPatient.name);
                passingPatient = passingPatient.next.next;
                this.sortier();
                this.length--;
                return;
            }
            passingPatient = passingPatient.next;
        }
        // throw new Error("Paciente no encontrado")
        console.log("Paciente no encontrado");
    }

    getPatient(name) {
        // Tu código aquí 👈🏻
        let passingPatient = this.head;

        while (passingPatient) {
            if (passingPatient.name == name) {
                const patientObject = {
                    name: passingPatient.name,
                    age: passingPatient.age,
                    bedNumber: passingPatient.bedNumber
                };
               
                
                return patientObject;
            }
        }
        // throw new Error("Paciente no encontrado")
        console.log("Paciente no encontrado");
    }

    getPatientList() {
        let passingPatient = this.head;
        let patientsArray = new Array();
        let count = 0;

        while (count < this.length) {
            const patientObject = {
                name: passingPatient.name,
                age: passingPatient.age,
                bedNumber:passingPatient.bedNumber
            }
            patientsArray.push(patientObject)
            passingPatient = passingPatient.next;
            count++;
        }
        
        return patientsArray;
    }

    getAvailableBeds() {
        return this.beds - this.length
    }
}

const list = new PatientList(3)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)
console.log(list.getPatientList())

list.removePatient("Paciente 1")
console.log(list.getPatientList())

console.log("availableBeds",list.getAvailableBeds())
list.addPatient("Paciente 2", 30)
list.addPatient("Paciente 3", 30)
console.log(list.getPatientList())
console.log("availableBeds", list.getAvailableBeds())