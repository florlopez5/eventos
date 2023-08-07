let contador = 0;
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("miBoton").addEventListener("click", function() {
    contador++;
    if (contador % 2) {
      alert("Hola");
    } else {
      alert("Hola soy el div");
    }
  }
  )
});