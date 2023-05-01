
export class sistemaAutenticacion {
    static login(usuario, clave){
        return usuario.clave == clave;
    }
}