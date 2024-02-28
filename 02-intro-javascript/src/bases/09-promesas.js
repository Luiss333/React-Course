import { getHeroeById } from './bases/08-imp-exp';
import heroes from './data/heroes';
/*const promesa = new Promise(( resolve, reject) =>{ //resolve y reject son funciones que se deben llamar para que la promesa se resuelva o se rechace
    setTimeout(() => {
        //Tarea
        //importen el 
        const p1 = getHeroeById(2);
        //console.log(p1);
        resolve( p1 );
        //reject ('No se pudo encontrar el héroe');
    }, 2000);
});

promesa.then((heroe)=>{
    console.log('heroe', heroe);
})
.catch(err => console.warn(err));
*/

const getHeroeByIdAsync = (id) => {
    return new Promise(( resolve, reject) =>{
        setTimeout(() => {
            //Tarea
            //importen el 
            const p1 = getHeroeById(id);
            //console.log(p1);
            //resolve( p1 );
            //reject ('No se pudo encontrar el héroe');
            if(p1){
                resolve(p1);
            }else{
                reject('No se pudo encontrar el héroe');
            }
        }, 2000);
    });

};

/*getHeroeByIdAsync(10)
    .then(heroe => console.log('Heroe', heroe))
    .catch(err => console.warn(err));
*/

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn);