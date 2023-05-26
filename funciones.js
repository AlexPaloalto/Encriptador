function guardarTexto(){
    var texto = document.getElementById("texto-inicio").value;
    document.getElementById("resultado").textContent = "Texto guardado: " + texto;
}