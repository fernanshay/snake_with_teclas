document.addEventListener("keydown", dibujarTeclado);
var teclas={
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};
var cuadrito= document.getElementById("area_de_dibujo");
var papel= cuadrito.getContext("2d");

function dibujo(color, xi, yi, xf, yf, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle= color;
  lienzo.lineWidth= 2;
  lienzo.moveTo(xi, yi);
  lienzo.lineTo(xf, yf);
  lienzo.stroke();
  lienzo.closePath();
}

dibujo("black", x - 2, y - 2, x + 1, y + 1, papel);

var x= 100;
var y= 100;

function dibujarTeclado(evento){
  var colorcito= "grey";
  var movimiento= 10;
    switch (evento.keyCode) {
      case teclas.UP:
        dibujo(colorcito, x, y, x, y - movimiento, papel);
        y= y - movimiento;
          break;
      case teclas.DOWN:
        dibujo(colorcito, x, y, x, y + movimiento, papel);
        y= y + movimiento;
          break;
      case teclas.LEFT:
        dibujo(colorcito, x, y, x - movimiento, y, papel);
        x= x - movimiento;
          break;
      case teclas.RIGHT:
        dibujo(colorcito, x, y, x + movimiento, y, papel);
        x= x + movimiento;
          break;
      default:
  }
}
  console.log(mousedown);
