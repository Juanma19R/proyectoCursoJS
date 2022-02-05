//SIMULADOR
const contenidoDisponible = [ //Array de objetos con el contenido disponible
    {
        titulo: "No mires arriba",
        genero: "Ciencia ficción, Drama",
        tipo: "Película",
        imagen: "./img/no-mires-arriba.jpg",
    },
    {
        titulo: "El marginal 4",
        genero: "Drama, Acción, Crimenes",
        tipo: "Serie",
        imagen: "./img/el-marginal-4.jpg",
    },
    {
        titulo: "Neymar: El caos perfecto",
        genero: "Documentales biográficos",
        tipo: "Documental",
        imagen: "./img/neymar-el-caos-perfecto.jpg",
    },
];

$(document).ready(function () { //Boton para ir a ver el contenido
    $(".btnVer").click(function (event) {
        event.preventDefault()
        console.log("Boton funcionando correctamente.") 
    });
});

for (const contenido of contenidoDisponible) { //Se muestran en pantalla los contenidos del array declarados, mediante cards
    $("#seccionContenidos").append(`
    <div class="card col-sm-12 col-lg-3 container">
        <img src="${contenido.imagen}" class="card-img-top card-img">
        <div class="card-body">
            <h5 class="card-title">${contenido.titulo}</h5>
            <p class="card-text">${contenido.genero} | ${contenido.tipo}</p>
            <a href="" class="btn btn-secondary btnVer">Ver</a>
        </div>
    </div>`);
    $("h5").animate({ opacity:'0.5'},
                    "slow",            
                    function(){ 
                        $("h5").animate({ opacity:'1'},
                        "fast",);
                    });
    $("a").fadeOut("slow", function() {
        $("a").fadeIn(1000);
    });
}

const busquedaForm = document.getElementById("busquedaForm"); //Se guarda el formulario en una variable

$(busquedaForm).submit (function(event) { //Boton para ejecutar la busqueda y cargar al historial lo buscado
    event.preventDefault()
    let busquedaFormData = new FormData(busquedaForm);
    let busquedaObj = convertirFormDataABusquedaObj(busquedaFormData);
    guardarBusquedaData(busquedaObj);
    insertarColumnaEnHistorial(busquedaObj);
    busquedaForm.reset();
});

function guardarBusquedaData(busquedaObj) { 
    let busquedaArray = JSON.parse(localStorage.getItem("busquedaData")) || []; //Si hay contenido en el local storege lo tomo y si no, lo empiezo en un array vacio
    busquedaArray.push(busquedaObj);
    //Convierto mi array a JSON y lo guardo en el local storage
    let busquedaArrayJson = JSON.stringify(busquedaArray);
    localStorage.setItem("busquedaData", busquedaArrayJson);
}

$(document).ready(function(event) { //Cuando el DOM se cargue, se ejecuta la funcion de traer la info del local storage y si no, lo empiezo en un array vacio
    let busquedaObjArray = JSON.parse(localStorage.getItem("busquedaData")) || [];
    busquedaObjArray.forEach(
        function(arrayElement) {
            insertarColumnaEnHistorial(arrayElement)
        }
    )
});

function convertirFormDataABusquedaObj(busquedaFormData) { //Funcion para convertir el FormData a un objeto 
    let contenidoTitulo = busquedaFormData.get("contenidoTitulo");
    let contenidoGenero = busquedaFormData.get("contenidoGenero");
    let contenidoTipo = busquedaFormData.get("contenidoTipo");
    return {
        "contenidoTitulo": contenidoTitulo,
        "contenidoGenero": contenidoGenero,
        "contenidoTipo": contenidoTipo
    }
}

function insertarColumnaEnHistorial(busquedaObj) { //Funcion para agregar las celdas a la tabla del historial
    let tablaRef = document.getElementById("historialTabla");
    
    let nuevaColumna = tablaRef.insertRow(-1);

    let nuevaCelda = nuevaColumna.insertCell(0);
    nuevaCelda.textContent = busquedaObj["contenidoTitulo"];

    nuevaCelda = nuevaColumna.insertCell(1);
    nuevaCelda.textContent = busquedaObj["contenidoGenero"];

    nuevaCelda = nuevaColumna.insertCell(2);
    nuevaCelda.textContent = busquedaObj["contenidoTipo"];
}

//NAVBAR

//Se toma el header del index y se guarda en una variable, luego se crea el elemento nav y se guarda en otra variable
let header = document.getElementById("menuNav");
let navBar = document.createElement("nav");

navBar.classList.add("navbar", "navbar-expand-lg", "navbar-light", "bg-light"); //Se agregan las clases de bootstrap para el navBar
navBar.innerHTML = `
<div class="container-fluid">
    <a class="navbar-brand" href="../index.html">
        <img src="./img/home.svg" alt="" width="30" height="24" class="d-inline-block align-text-top"> Streaming House
    </a>
</div>`;

header.appendChild(navBar); //A la variable "header" se le agrega el elemento que esta guardado en "navBar"