//Saludo a user
let nombre = prompt("Ingrese su nombre:"); //Se pide el nombre del usuario para dar una saludo.

function saludo(nombre) { //Se crea una funcion con el nombre pedido en la variable "nombre"
    let saludoUser = "Bienvenid@ " + nombre;
    return saludoUser;
}

let saludoFinal = saludo(nombre);
alert(saludoFinal); //Finalmente se ejecuta el saludo en un alert
//PROGRAMA

class Streaming { 
    constructor(titulo, genero, tipo) {
        this.titulo = titulo;
        this.genero = genero;
        this.tipo = tipo;
    }
}

let boton = document.getElementById("buscar");
boton.addEventListener("click", cargarBusqueda);

function cargarBusqueda() { //Capturamos el elemento
    let titulo = document.getElementById("titulo").value;
    let genero = document.getElementById("genero").value;
    let tipo = document.getElementById("tipo").value;
    let busqueda1 = new Streaming(titulo, genero, tipo);
    console.log(busqueda1);
    mostrarBusqueda(busqueda1);
}

function mostrarBusqueda(busqueda) { //Mostramos el elemento
    let formulario = document.getElementById("principal");
    formulario.innerHTML = "";
    let nuevaBusqueda = document.createElement("div"); //Agregamos otro elemento para mostrarlo en el documento
    nuevaBusqueda.className = "info-busqueda";
    nuevaBusqueda.innerHTML = `Decidiste ver ${busqueda.titulo}, del genero ${busqueda.genero}.`;

    formulario.appendChild(nuevaBusqueda);
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