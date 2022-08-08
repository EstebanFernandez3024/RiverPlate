const inputUsuario = document.getElementById("usuario")
const inputContrasenia = document.getElementById("contrasenia")
const formSesion = document.getElementById("form-sesion")
const logOut = document.getElementById("log-out")
const mainvideo = document.getElementById("videonone")
const haceteSocios = document.getElementById("haceteSocio")
const contrasenias= document.getElementById("contraseniaR")
const usuario = document.getElementById("usuarioR")
const formRegistro = document.getElementById("registro")
const botonR = document.getElementById("botonR")
const registrarse = document.getElementById("registrarse")



formRegistro.onsubmit = (e) =>{
     e.preventDefault()
     var nombre = usuario.value;
     var contrasenia = contrasenias.value;
   localStorage.setItem("usuarios", nombre)
   localStorage.setItem("contraseniass", contrasenia)
   
}

registrarse.onclick = () => {
    registro.style.display = "block"

    formSesion.style.display = "none"
}


formSesion.onsubmit = (e) => {
    e.preventDefault()
    if ( inputUsuario.value === usuarios.value && inputContrasenia.value === contraseniass.value ) {
        mainvideo.style.display = "flex"
        formSesion.style.display = "none"
     
        localStorage.setItem("user", true)
    } else {
        formSesion.reset()
        alert("El usuario o contraseña es incorrecta")
    }
}

function preferenciaDeUsuario () {
    const tokenLS = localStorage.getItem("user")
    if ( tokenLS === "true" ) {
        mainvideo.style.display = "flex"

        formSesion.style.display = "none"
     
    } else if ( tokenLS !== "true" ) {
        main.style.display = "none"
        formSesion.style.display = "flex"
    }
}

logOut.onclick = () => {
    localStorage.removeItem("user")
    location.reload()}
