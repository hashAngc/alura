var botonDes = document.querySelector("#boton2");
var resultado = document.querySelector("#campo2");
botonDes.addEventListener("click", function(event) {
    event.preventDefault();
    desencriptar(campo2);
    console.log(" descencriptar ");


});

function desencriptar(campo2) {
    let campo = document.getElementById("campo2").value;
    var letras = ['a', 'e', 'i', 'o', 'u'];
    var cambios = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    for (i in campo) {
        if (campo[i] === letras[0]) {
            campo = campo.replaceAll(cambios[0], letras[0]);
        } else if (campo[i] === letras[1]) {
            campo = campo.replaceAll(cambios[1], letras[1]);
        } else if (campo[i] === letras[2]) {
            campo = campo.replaceAll(cambios[2], letras[2]);
        } else if (campo[i] === letras[3]) {
            campo = campo.replaceAll(cambios[3], letras[3]);
        } else if (campo[i] === letras[4]) {
            campo = campo.replaceAll(cambios[4], letras[4]);
        }
        resultado.value = campo;
    }



}