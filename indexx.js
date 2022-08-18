const body = document.getElementById("bodyindex")
const ususario = {
    nombre:prompt("hola, como te llamas?"),
  
    edad:prompt("cuantos anios tenes")
}



const acceso = ( Number(ususario.edad)>=18) ? body.style.display = "block" : alert(" Eres menor de edad.")
