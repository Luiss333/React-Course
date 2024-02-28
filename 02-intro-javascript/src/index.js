// import { heroes } from './data/heroes'; //importar heroes entre llaves porque es un export
// import { heroes } from './data/heroes'; //importar heroes entre llaves porque es un export

import { heroes } from "./data/heroes";
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