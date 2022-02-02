for (let i = 0; i <= 9; i++) {
  document.getElementById("boton" + i).addEventListener("click", presion);
}

function presion(evt) {
  document.getElementById("resultado").innerHTML =
    document.getElementById("resultado").innerHTML + evt.target.value;
}
