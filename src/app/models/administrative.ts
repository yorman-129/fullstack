export class Administrative {
    'id': number;
    'cargo': string;
    'direccion': string;
    'nombreCompleto': string;
    'salario': number;
    'telefono': string;
    'tipoContrato': number;

    constructor(id:number,cargo:string,direccion:string,nombreCompleto:string,salario:number,telefono:string,tipoContrato:number){
        this.id=id;
        this.cargo=cargo;
        this.direccion=direccion;
        this.nombreCompleto=nombreCompleto;
        this.salario=salario;
        this.telefono=telefono;
        this.tipoContrato=tipoContrato; 
    }
 
}

