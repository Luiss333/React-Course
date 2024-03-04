
//Funciones en JavaScript

/*------------------------Referencia a la funcion------------------------
function saludar(nombre) {
    return `Hola, ${nombre}`;
}                                                   //Solo hace referencia a la funcion
console.log(saludar);
------------------------------------------------------------------------*/

/*------------------------Referencia a la funcion------------------------
function saludar(nombre) {
    return `Hola, ${nombre}`;
}                                                   //Se puede cambiar el valor de la funcion
saludar = 30
console.log(saludar);
------------------------------------------------------------------------*/

//------------------------Funcion como constante------------------------
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}                                                   //Declaramos la funcion como constante                                     
console.log(saludar('Goku'));
//------------------------------------------------------------------------

//------------------------Funcion flecha------------------------
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}                                                   //Declaramos como funcion flecha
console.log(saludar2('Vegeta'));
//------------------------------------------------------------------------

//------------------------Funcion flecha simple------------------------
const saludar3 = (nombre) => `Hola, ${nombre}`;   //Declaramos como funcion flecha
console.log(saludar3('Gohan'));
//------------------------------------------------------------------------

//------------------------Funcion flecha simple 2------------------------
const saludar4 = () => `Hola Mundo`;   //Declaramos como funcion flecha 2 sin argumentos
console.log(saludar4());
//------------------------------------------------------------------------

//-------------------------Funcion flecha----------------------------------
const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }
}
console.log(getUser());
//------------------------------------------------------------------------

//-------------Funcion flecha con el cuerpo entre parentesis---------------
const getUser2 = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
})
console.log(getUser2());
//------------------------------------------------------------------------

//Tarea
//1. Transformar a una funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas

/* function getUsuarioActivo(nombre) {
        return {
            uid: 'ABC567',
            username: nombre
        }
    };
*/

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);