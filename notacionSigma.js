
let z, a, n, y;                                                     // definimos variables  let para definir variables

console.log('Sumatoria con Notación Sigma')                         // para escribir en consola

z = prompt('introduzca a Z')                                        // prompt() para recibir la entrada y la guardamos en la variable

// validamos que los datos sean de acuerdo a las reglas

if (z < 1) {                                                        // esta es la condicional  (si  entonces)
    console.log('Z no puede ser menor que 1')
} else {
    a = prompt('introduzca A');
    n = prompt('Introduzca N ,debe ser menor que a');
}

if (n > a || n < 0) {                                               //si n > a  o (||) n > 0
    console.log('N no puede ser mayor que A ni menor que cero')
} else {
    y = prompt('introduzca Y ,debe ser mayor que 0 y mayor que n');
}

if (y < 0 || y < n) {
    console.log('Y no puede ser menor que 0 ni menor que N')

}
// ciclo  para 
for (let i = 1; i < z; i++) {                                       //declaramos i = 1 ;llega hasta que sea  i= z ;si aumenta 1 i 

    let resultado = ((y + n ^ z) / ((n * (n - 1)) ^ y)) ^ a 

    console.log(resultado)
    
    --n                                                             //resta 1  a n por cada iteracion 
    
}



