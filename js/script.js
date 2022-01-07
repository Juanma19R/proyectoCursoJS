function saludo() {
    alert(
        `¡Bienvenid@ ${nombre}!`
    );
}

let nombre = prompt("Ingrese su nombre:");
saludo();

class Streaming {
    constructor(titulo, genero, tipo) {
        this.titulo = titulo;
        this.genero = genero;
        this.tipo = tipo;
    }
mostrarInfo() {
    alert(
        `${this.titulo} es del genero ${this.genero} y es un/una ${this.tipo}`
        );
    }
}

const arrayStream = [];
let pregunta = prompt("¿Desea ver algo? (si/no)");

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