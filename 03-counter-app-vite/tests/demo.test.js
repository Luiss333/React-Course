describe('Pruebas en <DemoComponent />', () => {

    test('Esta prueba no debe de falallar', () => {
        // if (0 === 1) {
        //     throw new Error('No puede dividir entre cero');
        // }
        // ---------------------------------------------------

        // 1. Inicialización
        const message1 = 'Hola Mundo';

        // 2. Estímulo
        const message2 = message1.trim();

        // 3. Observar el comportamiento... esperado
        expect(message1).toBe(message2);

    });
});