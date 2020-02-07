var personaje;
function setup() {
  createCanvas(710, 400);
  personaje = new bolita();}
function draw() {
  background(0);
  personaje. mostrar();
  personaje. seguir();
  console.log(personaje);
}
