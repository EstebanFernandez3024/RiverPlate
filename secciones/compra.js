

let carrito2 = JSON.parse(localStorage.getItem("carrito")) || []
const detalle = document.querySelector("#detalle")

function productosCarrito() {
    carrito2.map(producto => {
        detalle.innerHTML += `
        <li class="detalleProd">
        <img src="${producto.img}"/>
        <p>${producto.nombre}</p>
        <p>${producto.precio}</p>
        <button class="botonBorrar">X</button>
        </li>`
    })
}

carrito2.length ? productosCarrito() : (detalle.innerHTML=`<h3>No hay nada en el carrito</h3>`)


let nombre = document.querySelector("#nombre")
let mail = document.querySelector("#mail")
let telefono = document.querySelector("#telefono")
let direccion = document.querySelector("#direccion")
let divConfirmacion = document.querySelector("#confirmacion")
let submit = document.querySelector("#submit")
let formulario = document.querySelector("#form")

formulario.onsubmit = (e) => {
    e.preventDefault()
    terminarCompra()
    formulario.reset()
   
}

function terminarCompra() {

    if (nombre.value !== "" && mail.value !== "" && telefono.value !== "" && direccion.value !== "") {
       
        divConfirmacion.innerHTML = `<div class="conf"><img src="../img/correcto.png" alt="" height="200">
<h3>felicidades su compra se realizo con exito! <br> Gracias por tu compra ${nombre.value}!</h3>
<p class="pdeconf" >en breves recibiras un Mail a ${mail.value} con la informacion sobre la fecha y horario de entrega!</p></div>
`



    } else {
        divConfirmacion.innerHTML = `
        <h3>Por favor complete todos los campos</h3>`
    }
}
