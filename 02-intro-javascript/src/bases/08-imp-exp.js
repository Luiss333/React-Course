// import { heroes } from './data/heroes'; //importar heroes entre llaves porque es un export y no un export default
//import  heroes  from "./data/heroes"; //importar heroes sin llaves porque es un export default y le puedo poner el nombre que quiera, pero no es recomendable
//import heroes, {owners} from "./data/heroes"; //importar heroes sin llaves porque es el default y owners entre llaves porque se está desestructurando
//import {heroes, owners} from "./data/heroes"; //importar de manera desestructurada
import heroes, {owners} from "./data/heroes";
console.log(owners);

/* Primera forma de hacerlo
const getHeroeById = (id) => { 
    return heroes.find(
        (element) => element.id === id
    );
};
*/
// Segunda forma de hacerlo ----------------------
const getHeroeById = (id) =>  heroes.find ( (element) => element.id === id ); //find para buscar un elemento que cumpla con la condición

console.log(getHeroeById(2));
//------------------------------------------------

//  Tarea
// find?, filter
const getHeroesByOwner = (owner) => heroes.filter ( (element) => element.owner === owner ); //filter para filtrar los elementos que cumplan con la condición
const getHeroesByOwner2 = (owner) => heroes.filter ( (element) => element.owner === owner );

console.log(getHeroesByOwner('DC'));
console.log(getHeroesByOwner2('Marvel'));