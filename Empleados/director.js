import { empleado } from "./empleado.js";


export class director extends empleado {

    constructor(nombre, dni, salario) {
        super(nombre, dni, salario);
    }

    verBonificacion () {

        const bono = 10;  //this.#salario + this.#salario * bono / 100;
        return super._verBonificacion(bono);
    }
}