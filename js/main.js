//PROGRAMA

let nombre = prompt("Ingrese su nombre:"); //Se pide el nombre del usuario para dar una saludo.

function saludo(nombre) { //Se crea una funcion con el nombre pedido en la variable "nombre"
    let saludoUser = "Bienvenid@ " + nombre;
    return saludoUser;
}

let saludoFinal = saludo(nombre);
alert(saludoFinal); //Finalmente se ejecuta el saludo en un alert

class Streaming { 
    constructor(titulo, genero, tipo) {
        this.titulo = titulo;
        this.genero = genero;
        this.tipo = tipo;
    }
    mostrarInfo() { //Luego de obtener los datos "titulo,genero y tipo" se imprime una alerta mostrando la información
        alert(`${this.titulo} es del genero ${this.genero} y es un/una ${this.tipo}`);
    }
}

const arrayStream = [];
let pregunta = prompt("¿Desea ver algo? (si/no)"); //Se crea un array con la información pedida si la respuesta es "si"

while (pregunta === "si") {
    let titulo = prompt("¿Que quieres ver hoy?"); 
    let genero = prompt("¿A que genero pertenece?");
    let tipo = prompt("¿Es una serie, un documental o una pelicula?");
    const busquedaStreaming = new Streaming(titulo, genero, tipo);
    busquedaStreaming.mostrarInfo();
    arrayStream.push(busquedaStreaming);
    console.log(arrayStream);
    pregunta = prompt("¿desea ver otra cosa? (si/no)");
    document.write(`Elegiste ver ${busquedaStreaming.titulo}`);
}

//NAVBAR

//Se toma el header del index y se guarda en una variable, luego se crea el elemento nav y se guarda en otra variable
let header = document.getElementById("menuNav");
let navBar = document.createElement("nav");

navBar.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-light"); //Se agregan las clases de bootstrap para el navBar
navBar.innerHTML = 
`<div class="container-fluid">
    <a class="navbar-brand">
        <img src="./img/tv.svg" alt="" width="30" height="24" class="d-inline-block align-text-top">
        Streaming House
    </a>
</div>`;
header.appendChild(navBar); //A la variable "header" se le agrega el elemento que esta guardado en "navBar"

let title = document.getElementById("title"); //Se toma el div con un ID y se agrega una etiqueta h1 para agregar un titulo
title.innerHTML = `<h1>¡Bienvenid@ a Streaming House ${nombre}!</h1>`;