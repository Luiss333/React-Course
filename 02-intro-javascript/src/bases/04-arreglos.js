

// Arreglos en JS
//const arreglo = new Array(); // No es muy común usarlo de esta forma 
const arreglo = [1,2,3,4];
//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4); // No es muy común usarlo de esta forma 

let arreglo2 = [...arreglo, 5]	// Se crea un nuevo arreglo con los elementos del arreglo original y se le agrega el 5;
//arreglo2.push(5);

const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);