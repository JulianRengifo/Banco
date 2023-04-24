
import { cuenta } from './cuenta.js';

export class cuentaNomina extends cuenta {

    constructor(cliente, numero, agencia, saldo) { // En cuenta de ahorro si se puede iniciar el saldo inicial
        // Desde este constructor se define saldo desde 0 para que en las otras cuentas solo se haga referencia a salod = 0
        super (cliente,numero, agencia, saldo); //Nuestra palabra reservada super nos permite llamar cosas del padre. //Si yo coloco acá super, él va a referenciar, ¿a quién? Al constructor de la clase padre llamada cuenta.
        
    }

    retirarDeCuenta(valor) {
        // se debe cobrar una comisión de 1%.
        super._retirarDeCuenta(valor, 1); //// Se invoca al padre para poder utilizar el metodo retirarDeCuenta
    }

}