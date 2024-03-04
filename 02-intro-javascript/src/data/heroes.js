// export const heroes = [ //export para que sea visible en otros archivos
// export default [ //De esta forma se puede importar sin llaves y con el nombre que quiera en el archivo que lo importe
const heroes = [ 
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

// Primera forma de hacer las exportaciones, default e individual

export const owners = ['DC', 'Marvel'];
export default heroes; // Definir el export default 


/* Segunda forma de hacer las exportaciones, default e individual
const owners = ['DC', 'Marvel'];

export {
    heroes as default,
    owners
}
*/