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

const titulo = prompt("¿Que quieres ver hoy?");
const genero = prompt("¿A que genero pertenece?");
const tipo = prompt("¿Es una serie, un documental o una pelicula?");
const instanciaStream = new Streaming(titulo, genero, tipo);
instanciaStream.mostrarInfo();

document.write(
    `Elegiste ver ${instanciaStream.titulo}`
);