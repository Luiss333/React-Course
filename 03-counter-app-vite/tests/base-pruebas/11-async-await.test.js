import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {

    test('getIamgen debe retornar url de la imagen', async () => {

        const url = await getImagen();
        console.log(url);

        expect(typeof url).toBe('string');
    })
})