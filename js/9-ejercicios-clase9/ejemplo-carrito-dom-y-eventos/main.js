// declaro un array de productos
let productos = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 950,
    imagen: "./img/imagenproducto.jpg",
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 750,
    imagen: "./img/imagenproducto.jpg",
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 900,
    imagen: "./img/imagenproducto.jpg",
  },
  {
    id: 4,
    nombre: "Producto 4",
    precio: 450,
    imagen: "./img/imagenproducto.jpg",
  },
  {
    id: 5,
    nombre: "Producto 5",
    precio: 500,
    imagen: "./img/imagenproducto.jpg",
  },
  {
    id: 6,
    nombre: "Producto 6",
    precio: 4500,
    imagen: "./img/imagenproducto.jpg",
  },
  {
    id: 7,
    nombre: "Producto 7",
    precio: 500,
    imagen: "./img/imagenproducto.jpg",
  },
  {
    id: 8,
    nombre: "Producto 8",
    precio: 550,
    imagen: "./img/imagenproducto.jpg",
  },
];
// Capturo el div con id container
const contenedor = document.getElementById("container");
// recorro el Array de productos con un for each
// el for each es un metodo que recibe como parametro una funcion de flecha
// esta funcion se ejecuta por cada elemento que tenga el array y le manda
//como parametro cada uno de los elementos.
// por cada vuelta ejecuta la funcion y dibuja una card
productos.forEach((producto, indice) => {
  //creo el elemento y lo guardo en la variable card
  let card = document.createElement("div");
  //como estoy usando bootstrap le agrego las clases que tiene la card que elegí
  card.classList.add("card", "col-sm-12", "col-lg-3");
  // a card le agrego el contenido html de la card, accediendo a los datos del array de objetos.
  card.innerHTML = `
    <img src="${producto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.precio}</p>
      <a href="#cart" class="btn btn-primary" onClick="comprar(${indice})" >Comprar</a>
    </div>
      `;
  // a la variable contenedor donde tengo capturado el div contenedor le agrego
  // la card que construi
  contenedor.appendChild(card);
});

const comprar = (indice) => {
  alert(`elegiste el ${productos[indice].nombre}`);
};
