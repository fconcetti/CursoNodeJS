{    const numeroIngresado= process.argv[2]
    let cantidadDigitos = numeroIngresado.length
    let contadorvueltas = 0

   
    if (numeroIngresado<=0 || numeroIngresado>10000){
        console.log("El valor ingresado debe ser mayor a 0 y menor igual a 10000")
        return;
    }else{
        switch (cantidadDigitos) {
            case 1:
                obtenerNumero(1,9, contadorvueltas, numeroIngresado);
                break;
            case 2:
                obtenerNumero(10,99, contadorvueltas, numeroIngresado);
                break;
            case 3:
                obtenerNumero(100,999, contadorvueltas, numeroIngresado);
                break;
            case 4:
                obtenerNumero(1000,9999, contadorvueltas, numeroIngresado);
                break;
            default:
                console.log(`El numero era ${numeroIngresado}`)
                console.log(`Lo encontre en  ${contadorvueltas}`)
                console.log(`Optimizado en +  i-contadorvueltas}`);
                break;
        }
}
    
}

function obtenerNumero(i,j,contadorvueltas, numeroIngresado) {
    for (let i = 1; j <= 9; i++) {
        contadorvueltas++;
        if (i == numeroIngresado) {
            console.log(`El numero era ${i}`);
            console.log(`Lo encontre en  ${contadorvueltas}`);
            console.log(`Optimizado en  ${i}-${contadorvueltas}`);
            console.log("Fin del programa");
        }
    }
  }
