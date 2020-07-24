const encendido = true
while (encendido == true) {
    // definimos variables  let para definir variables

    let z, a, n, y;
    
    // para escribir en consola

    console.log('Sumatoria con Notación Sigma')

    // prompt() para recibir la entrada
    z = prompt('introduzca a Z')

    // validamos que los datos sean de acuerdo a las reglas

    if (z < 1) {
        console.log('Z no puede ser menor que 1')
        // break finaliza el programa
        break
    }

    a = prompt('introduzca A');
    n = prompt('Introduzca N');

    if (n > a || n < 0) {
        console.log('N no puede ser mayor que A ni menor que cero')
        break
    }

    y = prompt('introduzca Y');
    if (y < 0 || y < n) {
        console.log('Y no puede ser menor que 0 ni menor que N')
        break
    }

    

}

