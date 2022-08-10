
 const productosOficiales = [ "Camisetas", "Camperas", "Pantaloes", "Shorts" ]
 console.log(productosOficiales)

 console.log(productosOficiales.push("Botines", "Remeras", "pelotas", "Zapatillas")) 

 let productos = [
    {
        nombre: "botines",
        precio: 18999,
    },
    {
        nombre: "camiseta",
        precio: 11999,
    },
    {
        nombre: "pelota",
        precio: 5000,
    },
    {
        nombre: "pantalos=n",
        precio: 9880,
    },]

/* Formulario */

const formulario = document.querySelector("#formulario")
const inputNombre = document.querySelector("#campo-nombre")
const inputApellido = document.querySelector("#campo-apellido")
const inputEdad = document.querySelector("#campo-edad")
const inputEmail = document.querySelector("#campo-email")
const inputMensaje = document.querySelector("#campo-mensaje")
const submit = document.querySelector("#submit")
const correcto = document.querySelector("#correcto")

const clientes = []

class Cliente {
    constructor(nombre, apellido, edad, email, mensaje){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.mensaje = mensaje;
    }
}

formulario.onsubmit = (event) => {
    event.preventDefault()
    console.log(event)
    clientes.push(new Cliente(inputNombre.value, inputApellido.value, inputEdad.value, inputEmail.value, inputMensaje.value))
    console.log(clientes)
}
inputNombre.onchange = () => {  
    console.log(inputNombre.value)
    if (inputNombre.value.length <= 2){
      swal("ERROR!", "tu nombre es muy corto!", "error");
        inputNombre.style.border = "2px solid red"
        submit.disabled = true
    } else {
        inputNombre.style.border = "2px solid green"
        submit.disabled = false
    }
}
inputApellido.onchange = () => {  
    console.log(inputApellido.value)
    if (inputApellido.value.length <= 2){
        swal("ERROR!", "tu apellido es muy corto!", "error");
        inputApellido.style.border = "2px solid red"
        submit.disabled = true
    } else {
        inputApellido.style.border = "2px solid green"
        submit.disabled = false
    }
}
inputEdad.onchange = () => {  
    console.log(inputEdad.value)
    if ( parseInt(inputEdad.value)<= 17){
        swal("ERROR!", "Eres menor de edad!", "error");
        inputEdad.style.border = "2px solid red"
        submit.disabled = true
    } else {
        inputEdad.style.border = "2px solid green"
        submit.disabled = false
    }
}

submit.onclick = () => {

   swal("FELICITACIONES!", "Su mensaje fue enviado!", "success");
  

}

