/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';
import { cuentaAhorro } from './cuentaAhorro.js';
import { cuenta } from './cuenta.js';


// Se pasan los datos como parametro debido a que se creo un constructor en cliente.js
const cliente = new Cliente('Julian', '13804050', '123224');
const cliente2 = new Cliente('Daniel', '16979808', '8989');

console.log(cliente);
console.log(cliente2);
                                //Tipo -numero - Agencia - Saldo
const cuentaJulian = new CuentaCorriente( cliente, '1',  '001' ); // Se cambia new CuentaCorriente por --> new cuenta
const cuentaDaniel = new CuentaCorriente( cliente2, '2', '002' );   // cambio a Corriente

const cuentaAhorroJulian = new cuentaAhorro( cliente, '8521', '001', 0); // / Se cambia new cuentaAhorros por --> new cuenta
/*
console.log(cuentaJulian);
cuentaJulian.depositoEnCuenta(150);
console.log(" Su deposito fue de : " + cuentaJulian.verSaldo());
cuentaJulian.retirarDeCuenta(70);
console.log( "Su saldo despues del retiro es de : " + cuentaJulian.verSaldo());

console.log(cuentaAhorroJulian);
cuentaAhorroJulian.depositoEnCuenta(500);
console.log(" Su deposito fue de : " + cuentaAhorroJulian.verSaldo());
cuentaAhorroJulian.retirarDeCuenta(200);
console.log("Su saldo despues del retiro es de : " + cuentaAhorroJulian.verSaldo());
*/
const cuentaSimple = new cuenta(cliente, '098', '001', 100);
console.log(cuentaSimple);





