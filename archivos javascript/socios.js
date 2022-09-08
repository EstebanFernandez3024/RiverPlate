const user = document.getElementById("user")
const password = document.getElementById("password")
const formlogin = document.getElementById("formlogin")
const login = document.getElementById("login")

const registerUser = document.getElementById("register")
const recuperarContraseña = document.getElementById("recuperarContraseña")

let users = JSON.parse(localStorage.getItem("users")) || [{
    username: "esteban",
    password: "esteban123",
}]




function logIn() {
    let usuarioIngresado = users.find(userU => userU.username === user.value)

    if (usuarioIngresado == undefined) {
        alert("error! vuelve a intentarlo")
    } else if (usuarioIngresado.password !== password.value) {
        alert("error!contrasenia incorrecta.  vuelve a intentarlo")
    } else {
        window.location.href = "sesion.html"
        alert("iniciaste correctamente")
    }
}

login.onclick = (e) => {
    e.preventDefault()
    logIn()
}

class nuevoususario {
    constructor(username, password) {
            this.username = username,
            this.password = password
    }
}


const divRegister = document.querySelector("#divRegister");
const titu = document.getElementById("titu")

function register() {
    const nuevoUsuario = new nuevoususario(inputUser.value, inputPassword.value)
    users.push(nuevoUsuario)

}
const inicio = document.getElementById("inicio")
registerUser.onclick = (e) => {
    e.preventDefault()
    divRegister.style.display = "flex"
    formlogin.style.display = "none"
    titu.style.display = "none"
    
    const formRegister = document.getElementById("formRegister")
    const inputUser = document.getElementById("inputUser")
    const inputPassword = document.getElementById("inputPassword");

    formRegister.onsubmit = (e) => {
        e.preventDefault()
        window.location.href = "socios.html"
        alert("ususario creado!")
        let usernameExiste = users.some((userA) => userA.username === inputUser.value)
       

        function nuevoUsuario() {
            const nuevousuario = new nuevoususario( inputUser.value, inputPassword.value)
            users.push(nuevousuario)
     
            divRegister.style.display = "none"
            setStorage()
        }

        (usernameExiste) ? alert("Este usuario ya se encuentra registrado"): nuevoUsuario()
    }

}
inicio.onclick = (e) => {
    formlogin.style.display = "flex"
    divRegister.style.display = "none"
}