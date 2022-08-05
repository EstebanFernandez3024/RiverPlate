let productosDiv = document.getElementById("productos")
let carrito = JSON.parse(localStorage.getItem("carrito")) || []

let btnFiltro = document.getElementsByClassName("filtrar")

const mostrarTodo = document.querySelector(".todo")

let botonAgregar = document.getElementsByClassName("agregar")
const divCarrito = document.querySelector("#carrito")
const carritoSection = document.querySelector("#carritoSection")
const vaciar = document.getElementById("vaciar")


function mostrarProductos(productos) {
    productos.forEach(producto => {
        productosDiv.innerHTML += `
        <div class="producto">
        <img class="foto" src=${producto.img}>
        <p>${producto.nombre} </p> 
        <p class="precio">$${producto.precio}</p>
        <button class="agregar" id="${producto.id}">Agregar 🛒</button>
    </div>`
    });
}

mostrarProductos(products)



for (btn of btnFiltro) {
    btn.addEventListener("click", filtrar)
}

function filtrar(e) {
    let btn = e.target
    let categoria = btn.innerText
    let productosFiltrados = products.filter(producto => producto.category === categoria.toLowerCase())
    console.log(productosFiltrados)
    productosDiv.innerHTML = ""
    mostrarProductos(productosFiltrados)
}






mostrarTodo.addEventListener("click", () => {
    productosDiv.innerHTML = ""
    mostrarProductos(products)
})



function agregarAlCarrito(e) {
    divCarrito.innerHTML = ""
    const boton = e.target;
    const idBoton = boton.getAttribute("id");
    let productoSeleccionado = products.find(producto => producto.id === idBoton)
    carrito.push(productoSeleccionado)

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Agregaste " + productoSeleccionado.nombre + " al carrito")

    mostrarCarrito()
}

for (boton of botonAgregar) {
    boton.addEventListener("click", agregarAlCarrito)
}


function mostrarCarrito() {
    carrito.forEach(producto => {
        divCarrito.innerHTML += `
            <div class="productoCarrito">
                <img src=${producto.img}>
                <h2> "${producto.nombre}" <br>
                $${producto.precio}</h2>
                <button class="botonBorrar" id="${producto.id}">eliminar</button>
            </div>
            `
    })
    let total = carrito.reduce((acc, curr) => acc + parseInt(curr.precio), 0)
    let totalCompra = document.createElement("p")
    totalCompra.setAttribute("class", "total")
    totalCompra.innerText = ("Total: " + total)
    divCarrito.append(totalCompra)

    let botonBorrar = document.getElementsByClassName("botonBorrar")

    for (botonX of botonBorrar) {
        botonX.addEventListener("click", eliminarProducto)
    }

    vaciar.addEventListener("click", () => {
        carrito = []
        localStorage.clear()
        divCarrito.innerHTML = ""
    })

    let terminarCompra = document.createElement("button")
    terminarCompra.setAttribute("class", "terminarCompra")
    terminarCompra.innerHTML=("Finalizar compra")
    divCarrito.append(terminarCompra)

    terminarCompra.addEventListener("click", ()=>{
        window.location.href="vender.html"
    })
}

carrito.length ? mostrarCarrito() : carritoSection.remove()



function eliminarProducto(e) {
    divCarrito.innerHTML = ""
    const botonX = e.target;
    const idBotonX = botonX.getAttribute("id");
    let indexProducto = carrito.findIndex(producto => producto.id === idBotonX)
    carrito.splice(indexProducto, 1)
    localStorage.removeItem("carrito")
    localStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito(carrito)
}



