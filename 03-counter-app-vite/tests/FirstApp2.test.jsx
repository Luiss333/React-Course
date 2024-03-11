import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp/> ", () => {
  const title = "Hola, soy Goku";
  const subTitle = "Soy un subtitulo";

  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<FirstApp title={title} />); // renderiza el componente
    expect(container).toMatchSnapshot(); // Compara el snapshot con el documento
  });

  test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
    render(<FirstApp title={title} />); // renderiza el componente
    expect(screen.getByText(title)).toBeTruthy(); // No existe el texto en el documento
    // screen.debug();
  });

  test("debe de mostar el titulo en un h1", () => {
    render(<FirstApp title={title} />); // renderiza el componente
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    ); // Busca el elemento h1 y verifica que contenga el texto
  });

  test("debe de mostar el subtitulo enviado por props", () => {
    render(<FirstApp title={title} subTitle="Soy un subtitulo" />); // renderiza el componente
    expect(screen.getAllByText(subTitle).length).toBe(2); // Busca todos los elementos que contengan el subtitulo
  });
});
