/**
 * 
 * 
 */

function mostrarJSON(json){
    var elementoUl = $("<ul/>",{
                        "class": "datos"
                    });

    $.each(json, function (key , val){
                    var datos = (key) + ": " + val ;
                    $("<li/>", { 
                        "id": key,
                        html : datos 
                    }).appendTo(elementoUl);
                });
    elementoUl.appendTo("#respuesta");
}

/** Devuelve un JSON con la información de la cuenta.
 * Se le pasa la api-key de la cuenta.
 *{
   "id"       : "b8169418-1c11-405f-91bb-e2b29d602b8a",
   "name"     : "ExampleAccount.1234",
   "world"    : 1007,
   "commander": true,
   "guilds" : [
     "75FD83CF-0C45-4834-BC4C-097F93A487AF"
   ],
   "created": "2012-01-01T00:00:00Z",
   "access" : "GuildWars2"
 }
 * 
 * function(data){
         $.each(data, function (key, val){
             var datos = key + ": " + val ;
             $("<li/>", { 
                        "id": key,
                        html : datos 
                    }).appendTo("#respuesta");
         });
     }
 **/
function getAccount(key){
    var urlApi = "https://api.guildwars2.com/v2/account?lang=es&access_token="+key;
    var info = $.getJSON(urlApi,function(data){
        var ele = mostrarJSON(data);
        return ele;
     });

     return info;
    
}

function getCharacters(key){
    var urlApi = "https://api.guildwars2.com/v2/characters?lang=es&access_token="+key;
    var info;
    $.getJSON(urlApi,function(data){
        info = data;
    });
    return info;
}

function getCharacter(key,keyp){
    var name = encodeURI(keyp);
    var urlApi = "https://api.guildwars2.com/v2/characters/"+ name +"?lang=es&access_token="+key;
    var info;
    $.getJSON(urlApi,function(data){
        info = data;
    });
    return info;
}