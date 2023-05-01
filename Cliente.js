export class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
    #clave;

    //Es decir, toda vez que se genera una instancia de cliente atribuir automáticamente su nombre, su DNI y su RUT.
    constructor(nombreCliente, dniCliente, rutCliente){  // Pasamos los parametros nombreCLiente etc
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
        this.#clave = '';
    }
    
    asignarClave(clave) {
        this.#clave = clave;
    }

    get clave() { // Con este get obtenemos el valor de la clave
        return this.#clave;
    }
}