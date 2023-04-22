export class cuenta {

    #cliente;
    #saldo;

    constructor (tipo, cliente, numero, agencia, saldo) { // Se definen los parametros privados y publicos
        this.tipo = tipo;
        this.numero = numero;    // Estos son datos publicos
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        if (this.tipo == 'Corriente')
        valor = valor * 1.05;          //para los retiros de cuentas corrientes, se debe cobrar una comisión de 5%.
        else if (this.tipo == 'Ahorro')
            valor = valor * 1.02;     //Ahora las cuentas de ahorro van a tener una comisión de 2% 
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