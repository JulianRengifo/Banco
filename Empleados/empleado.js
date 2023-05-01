export class empleado {

    #nombre;
    #dni;
    #salario;
    #clave;

    constructor (nombre, dni, salario) {
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#clave = '';
    }

    verBonificacion(){
        return this.#salario;
    }

    _verBonificacion(bono){
        return this.#salario + this.#salario * bono / 100;
    }

    asignarClave(clave) {
        this.#clave = clave;
    }

    autenticable(clave){    // se remplaza el get para encapsulamos el atributo login en un metodo     
        return clave == this.#clave;
    }
}