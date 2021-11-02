const palabra = "cosa";

//*al recorrer nos va a mostrar la letra en esa posicion
for (let i = 0; i < palabra.length; i++) {
  const element = palabra[i];
  console.log(element);
}

//*usando esto para un array, accedemos al elemento en esa posición:
const juegos = ["Doom", "Civ", "Worms"];

for (let j = 0; j < juegos.length; j++) {
  const element = juegos[j];
  console.log(element);
}

//*cortando ejecucion:
for (let goles = 1; goles < 10; goles += 2) {
  if (goles === 7) {
    console.log("no se puede hacer 7 goles, es ilegal");
    break;
  }
  //*ni siquiera nos imprime esto, cortó, chau, a otra cosa
  console.log("cantidad de goles: ", goles);
}
