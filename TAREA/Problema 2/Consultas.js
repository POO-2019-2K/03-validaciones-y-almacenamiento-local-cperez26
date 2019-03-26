export default class Consulta {
    constructor(consulta) {
        this._fecha = consulta.fecha;
        this._hora = consulta.hora;
        this._nombre = consulta.nombre;
        this._mes = [
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

    get fecha() {
        return this._fecha;
    }

    get hora() {
        return this._hora;
    }

    get nombre() {
        return this._nombre;
    }

    getFecha() {
        let fecha = this._fecha.getDate() + "/" + this._mes[this._fecha.getMonth()] + "/" + this._fecha.getFullYear();
        return fecha;
    }

    getDiaSemana(){
        let dia = this._fecha.getDay();
        console.log(dia);
        return dia;
    }
   

    getDias() {
        let oneDay = 24 * 60 * 60 * 1000;
        let differenceMs = (this._fecha-new Date());
        let dias = Math.trunc(differenceMs / oneDay);
        if(dias >= 0) {
            return dias+1;
        }
        
        else if(dias < 0) {
            return "-";
        }
       
        
       
    }
}