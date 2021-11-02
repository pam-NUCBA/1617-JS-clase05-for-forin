//*for in es util cuando no sabemos cuántos elementos tiene un objeto
//*https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in

let capitales = {
    Francia: 'Paris',
    Italia: 'Roma',
    Uruguay: 'Montevideo'
}

//*con objetos no podemos simplemente sacar el largo:

//console.log(capitales.length) //no tiene idea cuál es el largo
//console.log(capitales)

//*creamos una variable que vamos a usar para recorrer y mostrar los valores:
//*no es una regla fija, pero en general la variable va a ser la singular o una letra (usualmente la inicial)
for (const capital in capitales) {
    //conseguir los keys (la de la izquierda):
    console.log(capital)
    //conseguir el valor (el de la derecha):
    console.log(capitales[capital])
    console.log(`la capital de ${capital} es ${capitales[capital]}`)
}