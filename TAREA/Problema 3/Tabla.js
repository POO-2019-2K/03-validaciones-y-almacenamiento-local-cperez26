import Pago from "./Pago.js";

export default class Gasto {
    constructor(tableAgenda, tableInfo) {
        this._tableAgenda = tableAgenda;
        this._tableInfo = tableInfo;
        this._transporte = 0;
        this._hospedaje = 0;
        this._alimento = 0;
        this._otro = 0;
        this._pago = [];

        this._initTables();
    }

    _initTables() {
        let pagos = JSON.parse(localStorage.getItem("gasto"));
        if(pagos === null) {
            return;
        }
        pagos.forEach((pago, index) => {
            pago.fecha = new Date(pago.fecha);
            this._showInTable(new Pago(pago));
           
        });
    }

    _showInTable(pago) {
        let row = this._tableAgenda.insertRow(-1);

        let cellFecha = row.insertCell(0);
        let cellTipo = row.insertCell(1);
        let cellConcepto = row.insertCell(2);
        let cellMonto = row.insertCell(3);

        cellFecha.innerHTML = pago.getFecha();
        cellTipo.innerHTML = pago.tipo;
        cellConcepto.innerHTML = pago.concepto;
        cellMonto.innerHTML = pago.monto;

        if(pago.tipo === "transporte") {
            this._transporte = Number(pago.monto) + this._transporte;
        }
        else if(pago.tipo === "hospedaje") {
            this._hospedaje = Number(pago.monto) + this._hospedaje;
        }
        else if(pago.tipo === "alimento") {
            this._alimento = Number(pago.monto) + this._alimento;
        }
        else if(pago.tipo === "otro") {
            this._otro = Number(pago.monto) + this._otro;
        }


        this._tableInfo.rows[0].cells[1].innerHTML = this._transporte;
        this._tableInfo.rows[1].cells[1].innerHTML = this._hospedaje;
        this._tableInfo.rows[2].cells[1].innerHTML = this._alimento;
        this._tableInfo.rows[3].cells[1].innerHTML = this._otro;


        let objPago = {
            fecha: pago.fecha,
            tipo: pago.tipo,
            concepto: pago.concepto,
            monto: pago.monto
        }
        this._pago.push(objPago);
    }
    addGasto(pago) {
        this._showInTable(pago);
        localStorage.setItem("tipo", JSON.stringify(this._pagos));
    
    }
}
