window.onload = function(){
    document.getElementById("Boton").onclick = cambiarColor;

}//Window.onload sirve para ejecutar el javascript apenas se cargue la pagina




function cambiarColor(){
    document.body.style.backgroundColor = "#253649"; // siempre se necesita llamar el elemento que se desea operar en este caso el body
}