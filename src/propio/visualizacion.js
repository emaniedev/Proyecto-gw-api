

function mostrarCuenta(datos){
    var elementos = "";
    $.each(datos, function (key , val){
                    var texto = key + ": " + val ;
                    elementos +="<li id="+key+">"+texto+"</li>";
                   
                });
                 $("#listaDatos").html(
                    elementos
                    );
}

function mostrarPersonajes(datos){
    var elementos ="";
    $.each(datos, function(key, val){
        var click = "seleccionarPersonaje(\""+val+"\")";
        var clase = "btn btn-default";
        elementos += "<button class='"+clase+"' onclick='"+click+"'>"+val+"</button>";
        
    });
    $("#personajes").html(
        elementos           
    );
}

function mostrarPersonaje(datos){
    var elementos = "";
    $.each(datos, function(key, val){
        var texto = key + ": " + val;
        elementos += "<li id="+key+">"+texto+"</li>";
    });
    $("#personaje").html(
        elementos
    );
}

function mostrarEquipamiento(datos){
    var elementos = "";
    $.each(datos,function(key,val){
        var clase = "equipamiento";
        $.each(val, function(clave,valor){
            var texto = "id: "+valor.id + "\n"+
                        "posicion: "+valor.slot +"\n";
            elementos += "<div class="+clase+ " id="+valor.id+">"+seleccionarItem(valor.id)+"</div>";
            
        })
        
    });
    $("#equipamiento").html(
        elementos
    );
}

function mostrarItem(datos){
    var elementos = "";
    var texto =
    "<img src=\""+datos.icon+"\"/>"+
    "<ul>" +
    "<li>Nonmbre: " + datos.name + "</li>"+
    "<li>Tipo: " + datos.type + "</li>" +
    "<li>Rareza: " + datos.rarity + "</li>";
    if (datos.description != null){
        texto += "<li>Detalles: " + datos.description + "</li>";
    }
    texto += "</ul>";
    $("#"+datos.id).html(texto);
}