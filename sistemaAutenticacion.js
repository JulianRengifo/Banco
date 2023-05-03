
export class sistemaAutenticacion {
    static login(usuario, clave){
        
        //Está autenticable dentro del objeto? Sí. ¿Autenticable es una función? Sí. SI es así, ejecuta el código, si no, retorna falso.
        if ("autenticable" in usuario && usuario.autenticable instanceof Function)
            return usuario.autenticable(clave);
        else
            return false;
    }
}