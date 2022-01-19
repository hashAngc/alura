var botonDes = document.querySelector("#boton2");
var resultado = document.querySelector("#campo2");
var botonEncriptar = document.querySelector("#boton1");
var campo2 = document.querySelector("#campo2");
var copiar = document.querySelector("#campo1");
botonDes.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(" descencriptar ");
    desencriptar(campo2);

});

function desencriptar(campo2) {
    let campo = document.getElementById("campo2").value;
    campo = (campo).replaceAll('enter', 'e');
    campo = (campo).replaceAll("imes", 'i');
    campo = (campo).replaceAll("ai", 'a');
    campo = (campo).replaceAll("ober", 'o');
    campo = (campo).replaceAll("ufat", 'u');
    console.log(campo)
    resultado.value = campo;
}