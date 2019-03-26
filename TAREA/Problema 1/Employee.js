export default class Employee {
  constructor(employee) {
    this._numTrabajador = employee.numTrabajador;
    this._nombre = employee.nombre;
    this._fechaN = employee.fechaN;
    this._fechaC = employee.fechaC;
    this._sueldo = employee.sueldo;
    this._meses = [
      "Ene",
      "Feb",
      "Mar",
      "Abr",
      "May",
      "Jun",
      "Jul",
      "Ago",
      "Sep",
      "Oct",
      "Nov",
      "Dic"
    ];
  
  }
  
  get numTrabajador() {
      return this._numTrabajador;
  }

  get nombre() {
      return this._nombre;
  }

  get fechaN() {
      return this._fechaN;
  }

  get fechaC() {
      return this._fechaC;
  }

  get sueldo() {
      return this._sueldo;
  }

  getFNacimiento() {
      let fechaN = this._fechaN.getDate() + "/" + this._meses[this._fechaN.getMonth()] + "/" + this._fechaN.getFullYear();
      return fechaN;
  }

  getFContratacion() {
      let fechaC = this._fechaC.getDate() + "/" + this._meses[this._fechaC.getMonth()] + "/" + this._fechaC.getFullYear();
      return fechaC;
  }

  getEdad() {
      let oneDay = 24 * 60 * 60 * 1000;
      let oneYear = oneDay * 365;
      let differenceMs = new Date() - this._fechaN;
      let edad = Math.trunc(differenceMs / oneYear);
      return edad;
  }

  getAntiguedad() {

      let oneDay = 24 * 60 * 60 * 1000;
      let oneYear = oneDay * 365;
      let differenceMs = new Date() - this._fechaC;
      let antiguedad = Math.trunc(differenceMs / oneYear);
      return antiguedad;
  }
}