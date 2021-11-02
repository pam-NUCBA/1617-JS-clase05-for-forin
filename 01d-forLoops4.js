//https://desarrolloweb.com/articulos/619.php

//*vamos a anidar:
//*el de afuera va más lento, el de adentro va más rápido
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("i: ", i, "j: ", j);
    //*solo va a volver al de afuera cuando este sea falso! mientras el de adentro dé true, va a seguir recorriendo ese
  }
}

//*este no anda, prometo analizarlo y arreglarlo:
const persona = {
    ojos: 2,
    orejas: 2,
    dedos: {
        mano: 10,
        pie: 10
    }
}

for (let i = 0; i < persona.length; i++) {
    for (let j = 0; j < dedos.length; j++) {
        const element = dedos[j];
        console.log(element)
    }
    const element = persona[i];
    console.log(element)
}