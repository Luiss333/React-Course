import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await', () => {

    test('getIamgen debe retornar un error si no tenemos api key', async () => {

        const resp = await getImagen();
        console.log(resp);
        expect(resp).toBe('No se encontró la imagen');
    })
})