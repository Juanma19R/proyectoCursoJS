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