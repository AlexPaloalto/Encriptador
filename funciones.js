
function guardarTexto(){
    var texto = document.getElementById("texto-inicio").value;
    var texto_modificado = texto.replace(/a/g, "ai");
    document.getElementById("resultado").value =  texto_modificado;
}

