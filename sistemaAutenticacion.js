
export class sistemaAutenticacion {
    static login(usuario, clave){
        return usuario.autenticable(clave);
    }
}