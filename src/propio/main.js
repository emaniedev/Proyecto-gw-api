
//DECLARACION
//Conseguimos la Key
var key = $("#key").val();

//MAIN

iniciar();



//FUNCIONES


//Añadimos evento al boton de buscar
function iniciar(){
    $("#buscar").on("click",function(){
        getAccount(key,mostrarCuenta);
        getCharacters(key, mostrarPersonajes);
    });
}

//Definimos funcion seleccionarPersonaje de la vista

function seleccionarPersonaje(nombre){
    getCharacter(key,nombre, mostrarPersonaje);
    getEquipment(key,nombre,mostrarEquipamiento);
}

//Definimos funcion selectionarItem de la vista

function seleccionarItem(id){
    var html = getItem(key,id,mostrarItem);
    
}