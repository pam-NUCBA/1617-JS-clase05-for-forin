let i = 1;

//*puede no declararse uno de los valores, pero debe dividir con ; el lugar donde cada uno iria
//*la i ya existe, entonces puedo dejar vacío y completar solo los otros, y el incremento puedo hacerlo con +=, -=, *=, etc
for (; i < 20; i += 3) {
  console.log(i);
}

//*podés querer que haya varias condiciones, o que primero ejecute y luego corte. O que no corte nunca (por qué harías eso), etc
for (let j = 0; ; j += 2) {
  console.log("j:", j);
  if (j > 10) {
    break;
  }
}

//*podemos hacer el incremento adentro:
const num = 25;
for (let k = 0; k < num; ) {
  k += 2; //con esta se va a pasar uno, porque incrementa, imprime, y recién ahi chequea
  console.log("k: ", k);
}

//*modo pesadilla:
let l = 1; //primer termino

for (;;) {
  if (l > 10) break; //segundo termino
  console.log("l: ", l); //accion
  l += 2; //incremento (3er termino)
}

//*sería igual a:
for (let m = 1; m < 10; m += 2) {
  console.log("m:", m);
}
