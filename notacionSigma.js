// definimos variables  let para definir variables
let z, a, n, y;
// para escribir en consola
console.log('Sumatoria con Notación Sigma')

// prompt() para recibir la entrada
z = prompt('introduzca a Z')

// validamos que los datos sean de acuerdo a las reglas
if (z < 1) {
    console.log('z no puede ser menor que 1')
    // return finaliza el programa
      
}

a = prompt('introduzca A');
n = prompt('Introduzca N')
if (n > a || n < 0) {
    console.log('N no puede ser mayor que A ni menor que cero')

}

y = prompt('introduzca Y');
if (y < 0 || y < n) {
    console.log('y no puede ser menor que 0 ni menor que n')

}




