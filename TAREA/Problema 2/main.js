import Tabla from "./Tabla.js";
import Consulta from "./Consultas.js";

class Main {
    constructor() {
        let agenda = new Tabla(document.querySelector("#agenda"), document.querySelector("#info"));

        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if(form.checkValidity() === true) {
                let sfecha = document.querySelector("#fecha").value;
                sfecha = sfecha.split("-");
                let fecha = new Date(sfecha[0], sfecha[1]-1, sfecha[2]);
                let hora = document.querySelector("#hora").value;
                let nombre = document.querySelector("#nombre").value;

                let objConsulta = {
                    fecha: fecha,
                    hora: hora,
                    nombre: nombre
                }

                let consulta = new Consulta(objConsulta);

                agenda.addConsulta(consulta);
            }
         });
     }   
}

let m = new Main();