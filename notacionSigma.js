// definimos variables  let para definir variables

let z, a, n, y;

// para escribir en consola

console.log('Sumatoria con Notación Sigma')

// prompt() para recibir la entrada y la guardamos en la variable
z = prompt('introduzca a Z')

// validamos que los datos sean de acuerdo a las reglas
// esta es la condicional  (si  entonces)
if (z < 1) {
    console.log('Z no puede ser menor que 1')
    // break finaliza el programa

} else {
    a = prompt('introduzca A');
    n = prompt('Introduzca N ,debe ser menor que a');

}


if (n > a || n < 0) {
    console.log('N no puede ser mayor que A ni menor que cero')

    y = prompt('introduzca Y ,debe ser mayor que 0 y mayor que n');
}

if (y < 0 || y < n) {
    console.log('Y no puede ser menor que 0 ni menor que N')

}
// ciclo para 
for (let i = 1; i < z; i++) {

    
    let resultado = (y + n ^ z / n * --i ^ y) ^ a


    console.log(resultado)
}



