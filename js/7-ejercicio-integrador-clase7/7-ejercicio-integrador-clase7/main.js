// Defino la clase producto y su funcion constructora.
class Producto {
  constructor(nombre, precio, marca) {
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
  }
}

//funcion para cargar un  nuevo producto.
function cargarProducto(arrayProductos) {
  // capturo valores y los guardo en las variables asignadas
  let nombre = prompt("ingrese el nombre del producto");
  let precio = prompt("ingrese el precio");
  let marca = prompt("ingrese la marca elegida");
  //creo una nueva instancia de Producto
  const nuevoProducto = new Producto(nombre, precio, marca);
  //agrego el producto creado al array de productos
  arrayProductos.push(nuevoProducto);
  console.log("producto cargado correctamente");
  // llamo a la funcion para actualizar el local storage
  actualizarStorage(arrayProductos);
}
// funcion que actualiza el local storage.
function actualizarStorage(arrayProductos) {
  //aca seteo el arrayProductos que declaro abajo y lo stringifico.
  localStorage.setItem("productos", JSON.stringify(arrayProductos));
  console.log("local storage actualizado");
}
//funcion para mostrar productos cargados.
function mostrarProductos(arrayProductos) {
  //si el array tiene productos...
  if (arrayProductos.length) {
    //recorro el array
    for (i = 0; i < arrayProductos.length; i++) {
      // muestro productos
      console.log("producto " + (i + 1) + ": ");
      console.log(arrayProductos[i]);
    }
  } else {
    // el array esta vacio.
    console.log("no hay ningun producto cargado");
  }
}

// funcion para eliminar todos lo productos.
function eliminarProductos() {
  // limpio el array
  arrayProductos = [];
  console.log("se borraron todos los productos");
  // actualizo storage
  actualizarStorage(arrayProductos);
}

// Defino el array de productos como un array vacio
let arrayProductos = [];
// si existen datos en el local storage hago la carga inicial desde local storage.
if (localStorage.getItem("productos")) {
  arrayProductos = JSON.parse(localStorage.getItem("productos"));
  console.log("carga inicial desde el local storage");
}

// capturo una opcion por prompt.
let opcion = prompt(
  "ingrese una opcion: \n 1: cargar producto \n 2: mostrar productos en consola  \n 3: salir"
);

// mientras no sea opcion 3 (salir)
while (opcion !== "3") {
  if (opcion === "1") {
    cargarProducto(arrayProductos);
  }
  if (opcion === "2") {
    mostrarProductos(arrayProductos);
  }

  // pido la opcion nuevamente para continuar el bucle while.
  opcion = prompt(
    "ingrese una opcion: \n 1: cargar producto \n 2: mostrar productos en consola  \n 3: salir"
  );
}
// finaliza el programa con un saludo.
alert("muchas gracias.");
