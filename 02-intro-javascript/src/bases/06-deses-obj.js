
// Desestructuración
// Asignación Desestructurante

/*------------Imprimiendo propiedades de un objeto una a una------------
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);
---------------------------------------------------------------------*/
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    //rango: 'Soldado',
};

const { nombre, edad, clave } = persona; // Desestructuración de un objeto en una sola línea 

//console.log(nombre);
//console.log(edad);
//console.log(clave);

const usContext = ({clave, nombre, edad, rango = 'Capitan'}) => {

    // console.log(nombre, edad, rango);

    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

const {nombreClave, anios, latlng:{lat, lng}} = usContext(persona);   

console.log(nombreClave, anios);
console.log(lat , lng); 