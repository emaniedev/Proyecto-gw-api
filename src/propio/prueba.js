/**
 * Peticion de Cuenta
 */
/**
 *      ------ MAIN ------
 */
    obtenerCuenta();
    obtenerPersonajes();
    volver();

/**
 *      ------ FIN MAIN ------
 */

/**
 *      ------ FUNCIONES ------
 */

function obtenerCuenta (){
    $("#buscar").click(function(){
        $("#volver").show();
        $("#busqueda").hide();
        $("#listaDatos").show();
            var key = $("#key").val();
            $("#debug").html("p").text(key);
            var urlApi = "https://api.guildwars2.com/v2/account?lang=es&access_token="+key;
            $("#debug").html("p").text(urlApi);
            $.getJSON(urlApi, function(data) {
                var item = "Este token pertenece a " + data.name + " y tiene acceso a " + data.access;
                $("<p/>", {
                    id: data.name,
                    html : item
                }).appendTo("#listaDatos");
                $.each(data, function (key , val){
                    var datos = key + ": " + val ;
                    $("<li/>", { 
                        "id": key,
                        html : datos 
                    }).appendTo("#listaDatos");
                })
            })

            }
    )}

    function obtenerPersonajes (){
        $("#buscar").click(function(){
            var key = $("#key").val();
            $("#debug").html("p").text(key);
            var urlApi = "https://api.guildwars2.com/v2/characters?lang=es&access_token="+key;
            $("#debug").html("p").text(urlApi);
            $.getJSON(urlApi, function(data) {
                var item = "";
               
                $.each(data, function (key , val){
                    
                     var click = "seleccionarPersonaje('"+val+"')";
                    
                    $("<button/>", { 
                        "class" : "btn btn-default",
                        "id": val,
                        "value": val,
                        html : val ,
                        "onclick": click
                    }).appendTo("#personajes");
                })
            })
            
        }
    )}

    function seleccionarPersonaje(keyp){
        $("#listaDatos").hide();
        $("#personaje").empty();
            var key = $("#key").val();
            var name = encodeURI(keyp);
            var urlApi = "https://api.guildwars2.com/v2/characters/"+ name +"?lang=es&access_token="+key;
            
            $.getJSON(urlApi, function(data) {
                
                var item = "";
                var personaje = new Personaje(data.name,data.race,data.profession,data.level);


                $.each(personaje, function (key , val){
                    var datos = (key) + ": " + val ;
                    $("<li/>", { 
                        "id": key,
                        html : datos 
                    }).appendTo("#personaje");
                })
            })

        }

    function volver (){
        $("#volver").click(function(){
            $("#volver").hide();
            $("#busqueda").show();
        })
    }
        
    
 




/**
 *      ------ FIN FUNCIONES ------
 */