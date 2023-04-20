export class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;

    //Es decir, toda vez que se genera una instancia de cliente atribuir automáticamente su nombre, su DNI y su RUT.
    constructor(nombreCliente, dniCliente, rutCliente){  // Pasamos los parametros nombreCLiente etc
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
    }
}