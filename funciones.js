var vocales = {
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"
}

var vocales_inv = {
    ai:"a",
    enter:"e",
    imes:"i",
    ober:"o",
    ufat:"u"
}

function guardarTexto(){
    var texto = document.getElementById("texto-inicio").value;
    var texto_modificado = texto.replace(/a|e|i|o|u/g, function(matched){
        return vocales[matched];
    });
    document.getElementById("resultado").value =  texto_modificado;
}

function desencriptarTexto(){
    var texto_encrip = document.getElementById("texto-inicio").value;
    var texto_excrip_modificado = texto_encrip.replace(/ai|enter|imes|ober|ufat/g, function(matched){
        return vocales_inv[matched];
    });
    document.getElementById("resultado").value = texto_excrip_modificado;
}


function copiarTexto(){
    var texto2 = document.getElementById("resultado");
    texto2.select();
    texto2.setSelectionRange(0,99999);
    document.execCommand("copy");

}