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
    let campo = document.getElementById("campo2").value;
    var letras = ['a', 'e', 'i', 'o', 'u'];
    var cambios = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    for (i in campo) {
        if (campo[i] === letras[0]) {
            campo = campo.replaceAll(letras[0], cambios[0]);
        } else if (campo[i] === letras[1]) {
            campo = campo.replaceAll(letras[1], cambios[1]);
        } else if (campo[i] === letras[2]) {
            campo = campo.replaceAll(letras[2], cambios[2]);
        } else if (campo[i] === letras[3]) {
            campo = campo.replaceAll(letras[3], cambios[3]);
        } else if (campo[i] === letras[4]) {
            campo = campo.replaceAll(letras[4], cambios[4]);
        }
        resultado.value = campo;
        copiar.value = campo;
    }


}