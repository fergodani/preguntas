"use strict";

class Preguntador {
    constructor() {
        this.lector = "none";
    }

    leerTxt(file){
        var archivo = file[0];
        this.procesarFichero(archivo);
    }

    drop(event){
        event.preventDefault();
        var archivo = event.dataTransfer.items[0].getAsFile();
        this.procesarFichero(archivo);
    }

    procesarFichero(archivo){
        if (archivo.type.match("text/plain")) {        
            $("main p").html("El archivo se ha cargado correctamente");
            this.lector = new FileReader();
            this.lector.onload = function(evento) {
                var contenido = evento.target.result;
                suffleArray(contenido.split(/\r?\n/));
                console.log(array)
            }
            this.lector.readAsText(archivo);
        }else{
            $("main p").html("Archvo con formato incorrecto");
        }
    }

   

    dragover(event) {
        event.preventDefault();
    }
}

var array;
var index = 0;

function suffleArray(arr){
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    array = arr;
    $("#contenido").show();
    $("#fichero").hide();
    $("#pregunta").text(array[index]);
}

function next(){
    if(index >= array.length - 1)
        index = 0;
    else
        index++;
    $("#pregunta").text(array[index]);
}

function previous(){
    if(index <= 0)
        index = array.length - 1;
    else
        index--;
    $("#pregunta").text(array[index]);
}

var preguntador = new Preguntador();

