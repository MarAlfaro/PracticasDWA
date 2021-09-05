//funcion que trabaja como manejador de eventos
//
function init(){
    //Ingresar los datos a convertir//
    var op1 = prompt('Ingrese la cantidad de metros', '');
    var operaciones = document.getElementById('operaciones');

    var contenido = "<header>";
    contenido += "\t <h1> Calcular </h1> \n";
    contenido += "</header>\n";

    contenido += "<nav>";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t <a href=\"javascript:void(0)\"><input type='button' value='Pies'></a>\n";
    contenido += "\t</li>\n";
    contenido += "</ul>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t <a href=\"javascript:void(0)\"><input type='button' value='Pulgadas'></a>\n";
    contenido += "\t</li>\n";
    contenido += "</ul>\n";
    contenido += "<ul>\n";
    contenido += "\t<li>\n";
    contenido += "\t\t <a href=\"javascript:void(0)\"><input type='button' value='Yardas'></a>\n";
    contenido += "\t</li>\n";
    contenido += "</ul>\n";
    contenido += "</nav>\n";

    operaciones.innerHTML = contenido;
    var opciones = document.getElementsByTagName('a');

    for (var i = 0; i < opciones.length; i++){
        switch (i){
            case 0:                 
            //FunciÃ³n sumar                 
            opciones[i].onclick = function () {                     
                resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " Metros son equivalente a " + (parseFloat(op1) * parseFloat(3.281)) + " Pies </p>\n";                 
            }                 
            break;
            case 1:   
            opciones[i].onclick = function () {                     
                resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " Metros son equivalente a " + (parseFloat(op1) * parseFloat(39.370)) + " Pulgadas </p>\n";
            }                 
            break;
            case 2:
            opciones[i].onclick = function () {                     
                resultado.innerHTML = "<p class=\"letterpress\">" + op1 + " Metros son equivalente a " + (parseFloat(op1) * parseFloat(1.094)) + " Yardas </p>\n";
            }    
            break;             
        }
    }

}
window.onload = init();