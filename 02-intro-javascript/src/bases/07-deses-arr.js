

const  personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , ,p3 ] = personajes;

console.log(p3);

const retornaArreglo = () => { //Se crea una función que retorna un arreglo
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo(); //Se desestructura el arreglo que retorna la función

console.log(letras, numeros);

// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre

/*const usState = (valor) => { //Se crea una función que retorna un arreglo
    return [valor, ()=>{console.log('Hola Mundo')}]; //Se retorna un arreglo con un valor en primera posicion y una función en la segunda
};

const arr = usState('Goku'); //Se guarda el arreglo que retorna la función en una variable
console.log(arr); //Se imprime el arreglo
console.log(arr[0]); //Se imprime el primer valor del arreglo
arr[1](); //Se ejecuta la función que se encuentra en la segunda posición del arreglo

*/

const usState = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}];
};

const [nombre, stNombre] = usState('Goku');

console.log(nombre);
stNombre();