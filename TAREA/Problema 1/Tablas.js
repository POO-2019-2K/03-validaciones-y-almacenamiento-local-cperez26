import Employee from "./Employee.js";

export default class Agenda {
    constructor(tableAgenda, tableInfo) {
        this._tableAgenda = tableAgenda;
        this._tableInfo = tableInfo;
        this._sueldoMUno = 0;
        this._sueldoDos = 0;
        this._sueldoTres = 0;
        this._numTrabajador = 0;
        this._sueldoSuma = 0;
        this._sueldoP = 0;
        this._edadSuma = 0;
        this.edadPromedio = 0;
        this._employee = [];
        this._initTables();
    }

    _initTables() {
        let employee = JSON.parse(localStorage.getItem("empleados"));
        if(employee === null){
            return;
        }
        employee.forEach((employee, index) => {
            employee.fechaN = new Date(employee.fechaN);
            employee.fechaC = new Date(employee.fechaC);
            this._showInTable(new Employee(employee));
        });
    }

    _showInTable(employee) {
        let row = this._tableAgenda.insertRow(-1);

        let cellNumTrabajador = row.insertCell(0);
        let cellNombre = row.insertCell(1);
        let cellFechaN = row.insertCell(2);
        let cellFechaC = row.insertCell(3);
        let cellSueldo = row.insertCell(4);
        let cellEdad = row.insertCell(5);
        let cellAntiguedad = row.insertCell(6);

        cellNumTrabajador.innerHTML = employee.numTrabajador;
        cellNombre.innerHTML = employee.nombre;
        cellFechaN.innerHTML = employee.getFNacimiento();
        cellFechaC.innerHTML = employee.getFContratacion();
        cellSueldo.innerHTML = employee.sueldo;
        cellEdad.innerHTML = employee.getEdad();
        cellAntiguedad.innerHTML = employee.getAntiguedad();

        if(employee.sueldo < 10000) {
            this._sueldoUno++;
        }
        else if(employee.sueldo > 10000 && employee.sueldo <= 20000 ){
            this._sueldoDos++;
        }
        else if(employee.sueldo > 20000) {
            this._sueldoTres++;
        }

        this._numTrabajador++;
        this._sueldoSuma = Number(this._sueldoSuma) + Number(employee.sueldo);
        this._sueldoP = Number(this._sueldoSuma) / Number(this._numTrabajador);
        this._edadSuma = this._edadSuma + employee.getEdad();
        this._edadPromedio = this._edadSuma / this._numTrabajador;

        this._tableInfo.rows[0].cells[1].innerHTML = this._sueldoUno;
        this._tableInfo.rows[1].cells[1].innerHTML = this._sueldoDos;
        this._tableInfo.rows[2].cells[1].innerHTML = this._sueldoTres;
        this._tableInfo.rows[3].cells[1].innerHTML = this._sueldoP.toFixed(2);
        this._tableInfo.rows[4].cells[1].innerHTML = this._edadPromedio.toFixed();

        let objEmployee = {
            numTrabajador: employee.numTrabajador,
            nombre: employee.nombre,
            fechaN: employee.fechaNac,
            fechaC: employee.fechaCon,
            sueldo: employee.sueldo
        }
        this._employee.push(objEmployee);
    }
    addEmployee(employee) {
        this._showInTable(employee);
        localStorage.setItem("empleados", JSON.stringify(this._employee));
    }
}