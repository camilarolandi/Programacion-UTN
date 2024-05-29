
function validarEmail(email){
return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).test(email)
}

function validarPassword(password){
    const mayuscula = /[A-Z]/
return (password || password.length >= 6 ||mayuscula.test(password))
}


function obtenerPassword(){
    let password = prompt ("Ingrese su contraseña")

    while (!validarPassword(password)){
            alert ("Error: No se ingreso una contraseña válida")
            password = prompt ("Ingrese una contraseña valida")
    }
    alert("La contraseña ingresada es: " + password)
    return password
}


function obtenerEmail(){
    wihile (!validarEmail(email)){
        alert ("Error: No se ingreso un e-mail válido")
        email= prompt ("Ingrese un e-mail valido")
    } 
alert ("El email ingresado es: " + email)
return email
}



function login(){
    let email = obtenerEmail()
    let password = obtenerPassword()


return (email,password,email,password)

}


/* function obtenerDato(mensaje, mensajeError, validacion) {
let dato = prompt (mensaje)
while (!validacion(dato)){

}

}

obtenerDato ("Ingrese su contraseña", "Ingrese una contraseña valida", validarPassword)
obtenerDato() */


function obtenerDato(data) {
    let dato = prompt (data.mensaje)
    while (data.validacion(dato)){
    dato= prompt (dato.error)}
    }

    obtenerDato (
        {

            mensaje: "Ingrese su contraseña",
            error:"Ingrese una contraseña valida",
            validacion: validarPassword

    })