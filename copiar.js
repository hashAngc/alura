var botonCop = document.querySelector("#boton3");
var copiar = document.querySelector("#campo1");
botonCop.addEventListener("click", function(event) {
    event.preventDefault();
    copy(copiar);
});


function copy(copiar) {
    let cop = document.querySelector('#campo1');
    cop.select();

    document.execCommand("copy");

    alert("copiar");

}