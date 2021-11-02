//*mostrar impares:

for (let i = 0; i < 15; i++) {
  console.log("viene recorriendo: " + i);
  if (i % 2 !== 0) console.log(i);
  //acá es donde hace el incremento. Lo hace cuando terminó de ejecutar y va a subir a chequear de nuevo
}

//*bajar en vez de subir:

for (let j = 15; j > 0; j--) {
  if (j % 2 !== 0) console.log(j);
}
