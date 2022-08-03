const inputUsuario = document.getElementById("usuario")
const inputContrasenia = document.getElementById("contrasenia")
const formSesion = document.getElementById("form-sesion")
const logOut = document.getElementById("log-out")
const main = document.querySelector("main")
const haceteSocios = document.querySelector("haceteSocio")


const user = {
    usuario: "esteban3024",
    contrasenia: "1234567"
}

let notas = []



formSesion.onsubmit = (e) => {
    e.preventDefault()
    if ( inputUsuario.value === user.usuario && inputContrasenia.value === user.contrasenia ) {
        main.style.display = "flex"
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
        main.style.display = "flex"
        formSesion.style.display = "none"
     
    } else if ( tokenLS !== "true" ) {
        main.style.display = "none"
        formSesion.style.display = "flex"
    }
}
