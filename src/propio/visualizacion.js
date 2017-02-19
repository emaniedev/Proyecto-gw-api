

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
    var texto1 =

    "<img src=\""+datos.icon+"\"/>"+
    "<div>" +
    "<ul>" +
    "<li>Nonmbre: " + datos.name + "</li>"+
    "<li>Tipo: " + datos.type + "</li>" +
    "<li>Rareza: " + datos.rarity + "</li>";
    var rareza = datos.rarity;
    if (datos.description == null || datos.description == ""){
        texto1 += "</ul></div>";
        
    } else {
        texto1+= "<li>Detalles: " + datos.description + "</li>";
        texto1 += "</ul></div>";
    }
    var texto2 =
    "<div class='inactivo'>" +
    "<ul><h3>Stats</h3>";
    $.each(datos.details.infix_upgrade.attributes, function (key,val){
        texto2 += 
        "<li>"+val.attribute+": "+val.modifier+"</li>";
    })
    texto2 +=
    "</ul></div>";

    var texto = texto1 + texto2;
    
    $("#"+datos.id).html(texto).addClass(rareza.toLowerCase()).on("mouseover",function(e){
        
        $(e.target).find("div").toggleClass("inactivo");
    });
}

