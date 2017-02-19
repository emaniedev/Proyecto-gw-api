var apìURL = "";

function llamada(url, succ){
    $.ajax({
    url: url,
    type:"get",
    success: succ,
    error: function(){
        console.log("Fallo en llamada Ajax.\n");
    }
    
    })
}

function getAccount(key, call){
   var urlApi = "https://api.guildwars2.com/v2/account?lang=es&access_token="+key;
   llamada(urlApi, call);
   console.log("Saliendo getAccount");
}

function getCharacters(key, call){
    var urlApi = "https://api.guildwars2.com/v2/characters?lang=es&access_token="+key;
    llamada(urlApi, call);
    console.log("Saliendo getCharacters");
}

/**
 * Consigue un personaje concreto.
 * @param key La clave de la api
 * @param keyp El nombre del personaje.var name = encodeURI(keyp);
    var urlApi = "https://api.guildwars2.com/v2/characters/"+ name +"?lang=es&access_token="+key;

 * @param call Funcion de callback. 
 */
function getCharacter(key, keyp, call){
    var name = encodeURI(keyp);
    var urlApi = "https://api.guildwars2.com/v2/characters/"+ name +"?lang=es&access_token="+key;
    llamada(urlApi, call);
    console.log("Saliendo getCharacter");
}

function getEquipment(key, keyp, call){
    var name = encodeURI(keyp);
    var urlApi = "https://api.guildwars2.com/v2/characters/"+ name +"/equipment?lang=es&access_token="+key;
    llamada(urlApi, call);
    console.log("Saliendo getEquipment");
}

function getItem(key,keyi, call){
    var urlApi = "https://api.guildwars2.com/v2/items/"+ keyi +"?lang=es&access_token="+key;
    llamada(urlApi, call);
}