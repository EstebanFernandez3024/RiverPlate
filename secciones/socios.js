const inputUsuario = document.getElementById("usuario")
const inputContrasenia = document.getElementById("contrasenia")
const formSesion = document.getElementById("form-sesion")
const logOut = document.getElementById("log-out")
const mainsocios = document.getElementById("mainsocios")
const haceteSocios = document.getElementById("haceteSocio")
const contraseniaR= document.getElementById("contraseniaR")
const usuarioR = document.getElementById("usuarioR")
const formRegistro = document.getElementById("registro")
const botonR = document.getElementById("botonR")
const registrarse = document.getElementById("registrarse")
const beneficioss = document.getElementById("beneficios")


let  nuevoshinchas = []
let usuariR = []
let contraR = []

const pushearUsuario = (array, valor) => {
array.push(valor)
}
const subirls = (clave, valor) => {
    const arrayjson = JSON.stringify(valor)
    localStorage.setItem(clave, arrayjson)
}



formRegistro.onsubmit = (e) => {
e.preventDefault()
pushearUsuario(usuariR, usuarioR.value);
pushearUsuario(contraR, contraseniaR.value)
subirls("usuarios", usuariR)
subirls("contrasenia", contraR)
formSesion.style.display = "block"
formRegistro.style.display = "none"
}
const traerdels = (clave) => {
    const arraydels = localStorage.getItem(clave)
    const parseararray = JSON.parse(arraydels)
    return parseararray
    
    }
    const traerdelss = (clave) => {
        const arraydelss = localStorage.getItem(clave)
        const parseararrayy = JSON.parse(arraydelss)
        return parseararrayy
        
        }





let usuarioLS = traerdels("usuarios")
console.log(usuarioLS)

let contraseniaLS = traerdelss("contrasenia")
console.log(contraseniaLS)



registrarse.onclick = () => {
    registro.style.display = "block"

    formSesion.style.display = "none"
}


formSesion.onsubmit = (e) => {
    e.preventDefault()
 
    if (Number(inputContrasenia.value) === Number(contraseniaLS)){
        mainsocios.style.display = "flex"
        formSesion.style.display = "none"
        beneficios.style.display = "none"
        localStorage.setItem("user", true)
    } else {
        formSesion.reset()
        alert("El usuario o contraseña es incorrecta")
    }
}

function preferenciaDeUsuario () {
    const tokenLS = localStorage.getItem("user")
    if ( tokenLS === "true" ) {
        mainsocios.style.display = "flex"
       
        logOut.style.display = "flex"
        formSesion.style.display = "none"
     
    } else if ( tokenLS !== "true" ) {
        main.style.display = "none"
        formSesion.style.display = "flex"
    }
}

logOut.onclick = () => {
    localStorage.removeItem("user")
    location.reload()}
