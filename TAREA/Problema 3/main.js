import Gasto from "./Tabla.js";
import Pago from "./Pago.js";

class Main {
    constructor() {
        let gasto = new Gasto(document.querySelector("#agenda"), document.querySelector("#info"));
        
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let form = document.querySelector("#form");
            form.classList.add("was-validated");

            if(form.checkValidity() === true) {
                let sFecha = document.querySelector("#fecha").value;
                sFecha = sFecha.split("-");
                let fecha = new Date(sFecha[0], sFecha[1]-1, sFecha[2]);

                let tipo = document.querySelector("#tipo").value;
                let concepto = document.querySelector("#concepto").value;
                let monto = document.querySelector("#cantidad").value;

                let objPago = {
                    fecha: fecha,
                    tipo: tipo,
                    concepto: concepto,
                    monto: monto
                }
                let pago = new Pago(objPago);

                gasto.addGasto(pago);
            }
    });
   }
}

let m = new Main();