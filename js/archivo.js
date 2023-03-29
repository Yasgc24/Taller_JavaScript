// Efecto acordeón
  const acordeon = document.getElementsByClassName('container-1');

  for ( i = 0; i < acordeon.length; i++) {
    acordeon[i].addEventListener('click', function () {
      this.classList.toggle('activa')
    })
  }


// Elección cambio de temas
function colorChanger(x) {
  var body = document.getElementById("body");
  body.style.backgroundColor = x.value;
}