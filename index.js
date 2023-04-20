/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';
import { cuentaAhorro } from './cuentaAhorro.js';

// Se pasan los datos como parametro debido a que se creo un constructor en cliente.js
const cliente = new Cliente('Julian', '13804050', '123224');
const cliente2 = new Cliente('Daniel', '16979808', '8989');

console.log(cliente);
console.log(cliente2);

const cuentaJulian = new CuentaCorriente(cliente, '1', '001'); // Esta funcion espera parametros por el constructor que fue creado en CuentaCorriente
const cuentaDaniel = new CuentaCorriente(cliente2, '2', '002');

const cuentaAhorroJulian = new cuentaAhorro(cliente, '8521', '001', 0); // Se llenan los parametros que se declararon en cuentaAhorro.js en el constructor

console.log(cuentaJulian);
console.log(cuentaAhorroJulian);




