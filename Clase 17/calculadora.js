
/* Validaciones */
function validarEmail(){
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email)
}

function validarPassword(){
    return (Boolean(password) && password.length >= 6 && /[A-Z]/.test(password))
}


/* CallBack */
function obtenerDato(data){
let dato = prompt (data.mensaje)
while (!data.validacion(dato)){
    alert (data.error)
}

return dato

}


const datos ={

    email :{
        mensaje: "Ingrese su e-mail" ,
        error: "ERROR: No se ingreso un e-mail valido, reintente",
        validacion: validarEmail
    },

    password:{
        mensaje: "Ingrese su contraseña" ,
        error: "ERROR: No se ingreso una contraseña reintente",
        validacion: validarPassword
    }
}



function login(){
    let email=obtenerDato(datos.email)
    let password=  obtenerDato(datos.password)
    return {email: email, password:password}
}









/* function login() {
    let email = obtenerDato(DATOS.EMAIL)
    let password = obtenerDato(DATOS.PASSWORD)
    return { email: email, password: password}
} */