alert("Siguiendo las indicaciones podras calcular el total a pagar.")
let total = prompt("total a pagar")
let cuotas = prompt("cuotas a pagar")

if(cuotas <= 6){
    alert("5% de recargo" + " =   $ " + total*5/100)
}
else if (cuotas = 12){
    alert("8% de recargo" + " =   $" + total*8/100)
}
else if (cuotas > 12){
    alert("15% de recargo" + " =   $" + total*15/100)
}

let intereses = total*5/100

let preciofinal = total/cuotas + intereses 

alert("te quedaria cuotas de $" + preciofinal)

alert("precio final $" + (total+intereses))


class Formulario{

    constructor(nombre,apellido, edad, domicilio, codigoPostal, ciudad, pais, estadoCivil){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.domicilio=domicilio;
        this.codigoPostal=codigoPostal;
        this.ciudad=ciudad;
        this.pais=pais;
        this.estadoCivil=estadoCivil;
    }
    
}

const formularios = new Formulario("Esteban", "Fernandez", 33, "Rivadavia 3024", 1824, "Buenos Aires","Argentina","solero")
 console.log(formularios);



 
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
    },
]
console.log("Hola")

// DOM DOCUMENT OBJECT MODEL

// estructura de objetos generada por el navegador

// arbol dom

console.log(document)

// guarda elementos a través de su id
const container = document.getElementById("container")


// guardar elementos a través de su nombre de etiqueta
const div = document.getElementsByTagName("div")

console.log(div)

// guardar por el nombre de clase

const divClase = document.getElementsByClassName("tarjeta")
console.log(divClase)

// querySelector

//caso id

const contenedorDivID = document.querySelector("#container")

//caso class
const contenedorDivClass = document.querySelector(".tarjeta")

//caso etiqueta
const contenedorDivEtiqueta = document.querySelector("div")

console.log(contenedorDivClass, contenedorDivEtiqueta, contenedorDivID)

// querySelectorAll

const todosLoscontenedoresDiv = document.querySelectorAll("div")

console.log(todosLoscontenedoresDiv)


for(let i = 0; i < todosLoscontenedoresDiv.length; i++){
    console.log(todosLoscontenedoresDiv[i])
}

// NO SE PUEDE ITERAR SOBRE NODELIST CON MÉTODOS DE ARRAYS --- EJ

// todosLoscontenedoresDiv.map(curr => console.log(curr))

const parrafoSaludo = document.querySelector("#saludo")
console.log(parrafoSaludo)

// innerText (modifica el texto que se encuentra dentro de un elemento html)

parrafoSaludo.innerText = "le cambio el texto xd"

// innerHTML (define código html desde js que el navegador interpreta como código html)

container.innerHTML = `<p>Hola soy el p de innerhtml</p>`

// reduce(metodo de arrays) + innerhtml = tarjetas desde js

console.log(POKEMON)
console.log(POKEMON.pokemon)

const debilidadesPokemon = (array, i) => {    

    const debilidadesArray = array[i].weaknesses.reduce((acc, curr) => {
        return acc + `
            <p>${curr}</p>
        `      
    },"")

    return debilidadesArray
}


const tarjetasHtml = POKEMON.pokemon.reduce((acc, elemento, i) => {   

        return acc = acc + `    
            <div class="tarjeta">
                <div class="img-container">
                    <img src=${elemento.img} alt=${elemento.name}>
                </div>   
                <p>
                    ${elemento.name}
                </p> 
                <div>
                    <p>
                        Debilidades:
                    </p>
                    ${debilidadesPokemon(POKEMON.pokemon, i)}     
                </div>   
            </div>
        `       
},"")

console.log(tarjetasHtml)

const contenedorTarjetas = document.querySelector(".contenedor-tarjetas")

console.log(contenedorTarjetas)

contenedorTarjetas.innerHTML = tarjetasHtml