import Agenda from "./Tablas.js";
import Employee from "./Employee.js";

class Main {
    constructor() {
        let agenda = new Agenda(document.querySelector("#agenda"), document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if(form.checkValidity() === true) {
            let numTrabajador = document.querySelector("#numTrabajador").value;
            let nombre = document.querySelector("#nombre").value;
            let FechaN = document.querySelector("#fechaN").value;
            FechaN = FechaN.split("-");
            let fechaN = new Date(FechaN[0], FechaN[1]-1, FechaN[2]);
            let FechaC = document.querySelector("#fechaC").value
            FechaC = FechaC.split("-");
            let fechaC = new Date(FechaC[0], FechaC[1]-1, FechaC[2]);
            let sueldo = document.querySelector("#sueldo").value;

            let objEmployee = {
               numTrabajador: numTrabajador,
               nombre: nombre,
               fechaN: fechaN,
               fechaC: fechaC,
               sueldo: sueldo
            }

            let employee = new Employee(objEmployee);
            agenda.addEmployee(employee);

            }
        })
    }
}

let m = new Main();