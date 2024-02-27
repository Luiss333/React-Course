
//Creamo un obnjeto literal
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};
// console.table(persona); //De esta manera visualizamos el objeto en consola en forma de tabla
// console.log({persona:persona}); //De esta manera asignamos una propiedad el cual identifique al objeto

//const persona2 = persona; //No hacer este tiepo de copiado de objetos ya que si se modifica persona2 tambien se modifica persona 
const persona2 = {...persona} //De esta manera clonamos el objeto persona; 
persona2.nombre = 'Peter';

console.log(persona); //De esta manera visualizamos el objeto en consola
console.log(persona2); //De esta manera visualizamos el objeto en consola