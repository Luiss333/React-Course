import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe('Pruebas en 08-imp-exp', () => {
    test('getHeroeById debe de retornar un heroes por ID', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        //console.log(heroe);
        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroeById debe de retornar undefined si no existe', () => {
        const id = 100;
        const heroe = getHeroeById(id);
        //console.log(heroe);
        expect(heroe).toBeFalsy();
    });

    //Tarea
    // Debe de retornar un arreglo con los heroes de DC
    // Length === 3
    // toEqual al arreglo filtrado

    // debe de retornar un arreglo con los heroes de Marvel
    // Length === 2

    test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const testHeroes = getHeroesByOwner(owner);
        console.log(testHeroes);
        expect(testHeroes.length).toBe(3);
        expect(testHeroes).toEqual(
            [
                { id: 1, name: 'Batman', owner: 'DC' },
                { id: 3, name: 'Superman', owner: 'DC' },
                { id: 4, name: 'Flash', owner: 'DC' }
            ]
        );
    });

    test('getHeroesByOwner debe de retornar un arreglo con los heroes de Marvel', () => {
        const owner = 'Marvel';
        const testHeroes = getHeroesByOwner(owner);
        console.log(testHeroes);
        expect(testHeroes.length).toBe(2);
    });
});