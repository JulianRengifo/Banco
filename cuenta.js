export class cuenta {

    #cliente;
    numero;
    agencia;
    #saldo;

    constructor ( cliente, numero, agencia, saldo) { // Se definen los parametros privados y publicos
        //this.tipo = tipo;
        this.numero = numero;    // Estos son datos publicos
        this.agencia = agencia;
        this.#cliente = cliente; // Cliente es un atributo privado por eso hacemos uso de set y get
        this.#saldo = saldo;
    }

     //get y set que nos permiten gestionar de una mejor forma los atributos privados.
    set cliente(valor) {
        if (valor instanceof Cliente) // si el valor recibido es una instancia de la clase cliente, solo en ese punto es que yo logro atribuir mi referencia de cliente
            this.#cliente = valor;
    }

    get getCliente() {
        return this.#cliente;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        /* if (this.tipo == 'Corriente')
        valor = valor * 1.05;          //para los retiros de cuentas corrientes, se debe cobrar una comisión de 5%.
        else if (this.tipo == 'Ahorro')
            valor = valor * 1.02;     //Ahora las cuentas de ahorro van a tener una comisión de 2% */
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