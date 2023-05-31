var vocales = {
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"
}

function guardarTexto(){
    var texto = document.getElementById("texto-inicio").value;
    var texto_modificado = texto.replace(/a|e|i|o|u/g, function(matched){
        return vocales[matched];
    });
    document.getElementById("resultado").value =  texto_modificado;
}

