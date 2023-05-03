
export class sistemaAutenticacion {
    static login(usuario, clave){
        if ("autenticable" in usuario)
            return usuario.autenticable(clave);
        else
            return false;
    }
}