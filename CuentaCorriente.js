import { Cliente } from "./Cliente.js";
import { cuenta } from "./cuenta.js";

export class CuentaCorriente extends cuenta {
// Con extends cuenta de esta forma ya la clase cuenta corriente está tomando todo el funcionamiento de la clase cuenta.
//Entonces si yo estoy extendiendo de cuenta, yo tomo sus atributos, sus métodos,
    static cantidadCuentas = 0; //con static estamos diciendo que este atributo es común para todas las cuentas.
    

    constructor(cliente, numero, agencia) {
        // Desde este constructor se define saldo desde 0 para que en las otras cuentas solo se haga referencia a salod = 0
        super (cliente,numero, agencia, 0); //Nuestra palabra reservada super nos permite llamar cosas del padre. //Si yo coloco acá super, él va a referenciar, ¿a quién? Al constructor de la clase padre llamada cuenta.
        CuentaCorriente.cantidadCuentas++;
        /* Ahora bien, yo acá no puedo decir this.cantidadCuentas, porque acá estoy diciéndole: "Para esta instancia, incrementa".
        Pero no existe para esta instancia el atributo cantidad de cuentas, entonces acá yo cambio el concepto, cambio la palabra 
         this por el nombre de la clase, entonces ya me refiero a la clase en general y no a una instancia particular sino a todas las instancias. */
    }

    retirarDeCuenta(valor) {
        // valor = valor * 1.05;      //para los retiros de cuentas corrientes, se debe cobrar una comisión de 5%.
        super.retirarDeCuenta(valor, 5); //// Se invoca al padre para poder utilizar el metodo retirarDeCuenta
    }
}