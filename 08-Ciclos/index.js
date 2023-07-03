/*Estructura de for, lista nros de 0 al 9 
console.log("Ejercicio 1- ciclo for basico")
console.clear
for (let i = 0; i < 10; i++) {
    console.log(i)
    
}

 /*codigo de Daniel
    for (let i=1;i<=10000;i++){
        contadorvueltas++
        if(i==cantidadvueltas){
            console.log(`El numero era ${i}`)
            console.log(`Lo encontre en  ${contadorvueltas}`)
            break;
        }

    }*/

/*Estructura de for, muestra tablas de multiplicacion */
/*Corre las tablas de multiplicacion 
console.log("Ejercicio 2- usando tabla del 2")
console.clear
for (let i = 1; i < 100; i++) {
    console.log("=================")
    console.log(`tabla del ${i}`)
    console.log("=================")
    for (let j = 1; j < 10; j++){
        console.log(`${i}x${j}=${i*j}`)
    }
}

/*Estructura de for, muestra tablas de multiplicacion */
/*Corre las tablas de multiplicacion 
console.log("Ejercicio 3- multiplica por 10")
console.clear
for (let i = 1; i < 100; i=i+10) {
    console.log("=================")
    console.log(`tabla del ${i}`)
    console.log("=================")
    for (let j = 1; j < 10; j++){
        console.log(`${i}x${j}=${i*j}`)
    }
}*/

/*Calculadora de numeros de 0 a 10000*/{
    const numeroIngresado= process.argv[2]
    let cantidadDigitos = numeroIngresado.length
    let contadorvueltas = 0

   
    if (numeroIngresado<=0 || numeroIngresado>10000){
        console.log("El valor ingresado debe ser mayor a 0 y menor igual a 10000")
        return;
    }else{
        switch (cantidadDigitos) {
            case 1:
                for (let i=1;i<=9;i++){
                    contadorvueltas++
                    if(i==numeroIngresado){
                        console.log(`El numero era ${i}`)
                        console.log(`Lo encontre en  ${contadorvueltas}`)
                }
                }
                break;
            case 2:
                for (let i=10;i<=99;i++){
                    contadorvueltas++
                    if(i==numeroIngresado){
                        console.log(`El numero era ${i}`)
                        console.log(`Lo encontre en  ${contadorvueltas}`)
                    }
                }
                break;
            case 3:
                for (let i=100;i<=999;i++){
                    contadorvueltas++
                    if(i==numeroIngresado){
                        console.log(`El numero era ${i}`)
                        console.log(`Lo encontre en  ${contadorvueltas}`)
                    }
                }
                break;
            case 4:
                for (let i=1000;i<=9999;i++){
                    contadorvueltas++
                    if(i==numeroIngresado){
                        console.log(`El numero era ${i}`)
                        console.log(`Lo encontre en  ${contadorvueltas}`)
                    }
                }
                break;
            default:
                console.log(`El numero era ${numeroIngresado}`)
                console.log(`Lo encontre en  ${contadorvueltas}`)
                break;
        }
}
    
}

/*
while (condition) {
    console.log(condition)
    condition=false
    console.log(condition)
} 

do {
    console.log(condition)
    let condition=false
    console.log(condition)
} while (condition);

for (let i = 0; i < 10; i++) {
    for(let j=0; j<10;j++)
    console.log(i)
    
}*/

