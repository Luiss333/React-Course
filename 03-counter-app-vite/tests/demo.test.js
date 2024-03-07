test('Esta prueba no debe de falallar', () => {
    if (0 === 1) {
        throw new Error('No puede dividir entre cero');
    }
})