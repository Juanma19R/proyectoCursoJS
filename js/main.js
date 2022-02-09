const searchForm = document.getElementById("searchForm"); //Se guarda el formulario en una variable

$(searchForm).submit (function(event) { //Boton para ejecutar la busqueda y cargar al historial lo buscado
    event.preventDefault()
    let searchFormData = new FormData(searchForm);
    let searchObj = convertFormDataToSearchObj(searchFormData);
    saveSearchData(searchObj);
    insertColumnInList(searchObj);
    searchForm.reset();
});

function saveSearchData(searchObj) { 
    let searchArray = JSON.parse(localStorage.getItem("searchData")) || []; //Si hay contenido en el local storege lo tomo y si no, lo empiezo en un array vacio
    searchArray.push(searchObj);
    //Convierto mi array a JSON y lo guardo en el local storage
    let searchArrayJson = JSON.stringify(searchArray);
    localStorage.setItem("searchData", searchArrayJson);
}

$(document).ready(function() { //Cuando el DOM se cargue, se ejecuta la funcion de traer la info del local storage y si no, lo empiezo en un array vacio
    let searchObjArray = JSON.parse(localStorage.getItem("searchData")) || [];
    searchObjArray.forEach(
        function(arrayElement) {
            insertColumnInList(arrayElement)
        }
    );
});

function convertFormDataToSearchObj(searchFormData) { //Funcion para convertir el FormData a un objeto 
    let contentTitle = searchFormData.get("contentTitle");
    let contentGenre = searchFormData.get("contentGenre");
    let contentTipe = searchFormData.get("contentTipe");
    return {
        "contentTitle": contentTitle,
        "contentGenre": contentGenre,
        "contentTipe": contentTipe
    }
}

function insertColumnInList(searchObj) { //Funcion para agregar las celdas a la tabla
    let tableRef = document.getElementById("listTable");
    
    let newColumn = tableRef.insertRow(-1);

    let newCell = newColumn.insertCell(0);
    newCell.textContent = searchObj["contentTitle"];

    newCell = newColumn.insertCell(1);
    newCell.textContent = searchObj["contentGenre"];

    newCell = newColumn.insertCell(2);
    newCell.textContent = searchObj["contentTipe"];
}