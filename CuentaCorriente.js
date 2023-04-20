import { Cliente } from "./Cliente.js";

export class CuentaCorriente
{
    #cliente;
    numero;
    agencia;
    #saldo;
    static cantidadCuentas = 0; //con static estamos diciendo que este atributo es común para todas las cuentas.

    //get y set que nos permiten gestionar de una mejor forma los atributos privados.
    set cliente(valor) {
        if (valor instanceof Cliente) // si el valor recibido es una instancia de la clase cliente, solo en ese punto es que yo logro atribuir mi referencia de cliente
            this.#cliente = valor;
    }

    get getCliente() {
        return this.#cliente;
    }

    constructor(cliente, numero, agencia) {
        this.cliente = cliente; // Cliente es un atributo privado por eso hacemos uso de set y get
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        CuentaCorriente.cantidadCuentas++;
        /* Ahora bien, yo acá no puedo decir this.cantidadCuentas, porque acá estoy diciéndole: "Para esta instancia, incrementa".
        Pero no existe para esta instancia el atributo cantidad de cuentas, entonces acá yo cambio el concepto, cambio la palabra 
         this por el nombre de la clase, entonces ya me refiero a la clase en general y no a una instancia particular sino a todas las instancias. */
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(valor,cuentaDestino) {
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
        valor = valor*1000;
    }
}