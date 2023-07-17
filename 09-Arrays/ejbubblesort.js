/* Ejercicio de las burbujas 

1. Definir el array
2. Cargar el array con valores aleatorios
3. Ordenar el array, dejando al mas chiquito primero y el mas grande al final
*/

const myarray=[1, 2, 3, 4, 5,89,90,100]


console.log(myarray)
console.log("Longitud del array " + myarray.length)



/* Primera forma de recorrer un arreglo usando el ciclo for */

for (let i = 0; i < myarray.length; i++) {
    console.log("Posicion del arreglo " + myarray[i])
    }

/* Segunda forma de recorrer un arreglo usando el for each */
myarray.forEach(Elemento =>{
    console.log(Elemento)
});

/* Tercera forma de recorrer un arreglo usando funcion */
myarray.forEach(function(myarray,index){
        console.log("Posicion: " + index + " => " + myarray)
    })

  /* Cuarta forma de recorrer un arreglo usando un objeto */
dias = [
    {nro:1,dia:'LUNES', mes:"ENERO"},
    {nro:2,dia:'MARTEs', mes:"FEBRERO"},
    {nro:3,dia:'MIERCOLES', mes:"MARZO"},
    {nro:3,dia:'JUEVES', mes:"ABRIL"},
    {nro:3,dia:'VIERNES', mes:"MAYO"}
];
dias.map(function(dias){
    console.log(dias.nro + " => " + dias.dia + " meses " + dias.mes)
});

const arrayburbuja=[20, 1, 3, 5, 7, 33, 50, 100]

let i, n, j, aux

n=arrayburbuja.length

for (j= 1; j<n; j++) {
    for (i = 0; i < (n-j); i++) {
        if (arrayburbuja[i]> arrayburbuja[i+1]) {
            aux = arrayburbuja[i]
            arrayburbuja[i]=arrayburbuja[i+1]
            arrayburbuja[i+1]=aux;
        }
        
    }
}
console.log("El array de burbujas es " + arrayburbuja)

dkdkkdk kdkkdk