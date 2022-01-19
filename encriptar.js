var botonEncriptar = document.querySelector("#boton1");
var campo2 = document.querySelector("#campo2");
var resultado = document.querySelector("#campo2");
var copiar = document.querySelector("#campo1");
botonEncriptar.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(" encripto ");
    encriptar(campo2);
});

function encriptar(campo2) {
    let campo = document.getElementById('campo2').value.toLowerCase('en-US');
    campo = (campo).replace('e', 'enter');
    campo = (campo).replace('i', 'imes');
    campo = (campo).replace("a", "ai");
    campo = (campo).replace("o", "ober");
    campo = (campo).replace("u", "ufat");
    console.log(campo);
    resultado.value = campo;
    copiar.value = campo;


}