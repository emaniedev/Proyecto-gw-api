
//DECLARACION
//Conseguimos la Key
var key = $("#key").val();
$("#volver").hide();
$("#respuesta").hide();

//MAIN

iniciar();



//FUNCIONES


//Añadimos evento al boton de buscar
function iniciar(){
    
    $("#buscar").on("click",function(){
        key = $("#key").val();
        getAccount(key,mostrarCuenta);
        getCharacters(key, mostrarPersonajes);
        $("#busqueda").hide();
        $("#volver").show();
        $("#respuesta").show();
    });
    $("#volver").on("click", function(){
        $("#busqueda").show();
        $("#volver").hide();
        $("#respuesta").hide();
    })
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