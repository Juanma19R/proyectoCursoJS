function saludo() {
    alert(
        `¡Bienvenid@ ${nombre}!`
    );
}

function presupuesto() {
    if (producto1 == "1" && producto2 == "1") {
        return casa + amoblada;
    } else if (producto1 == "1" && producto2 == "2") {
        return casa + sinAmoblar;
    } else if (producto1 == "2" && producto2 == "1") {
        return departamento + amoblada;
    } else if (producto1 == "2" && producto2 == "2") {
        return departamento + sinAmoblar;
    } else if (producto1 == "3" && producto2 == "1") {
        return quinta + amoblada;
    } else if (producto1 == "3" && producto2 == "2") {
        return quinta + sinAmoblar;
    }
}

function finalizarCompra() {
    if (producto1 == "1" && producto2 == "1") {
        alert("Elegiste la casa amoblada.");
    } else if (producto1 == "1" && producto2 == "2") {
        alert("Elegiste la casa sin amoblar.");
    } else if (producto1 == "2" && producto2 == "1") {
        alert("Elegiste el departamento amoblado.");
    } else if (producto1 == "2" && producto2 == "2") {
        alert("Elegiste el departamento sin amoblar.");
    } else if (producto1 == "3" && producto2 == "1") {
        alert("Elegiste la quinta amoblada.");
    } else if (producto1 == "3" && producto2 == "2") {
        alert("Elegiste la quinta sin amoblar.");
    }
}

  // main
let nombre = prompt("Ingrese su nombre:");
    saludo();

let casa = 17000000;
let departamento = 22000000;
let quinta = 25000000;
let producto1 = prompt(
    "¿Que estas buscando? \n 1: Casa \n 2: Departamento \n 3: Quinta");
let amoblada = 80000;
let sinAmoblar = 0;    
let producto2 = prompt(
    "Elija como la prefiere: \n 1: Amoblada \n 2: Sin amoblar");
finalizarCompra();
    alert(" Su compra es un total de $ " + presupuesto());