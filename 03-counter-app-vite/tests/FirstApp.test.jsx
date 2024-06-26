import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";

describe("Pruebas en <FirstApp/> ", () => {
  /* test("Debe de hacer match con el snapshot", () => {
    const title = "Hola, soy Goku";
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  }); */

  test("Debe de mostrar el titulo en un h1", () => {
    const title = "Hola, soy Goku";
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );
    expect(getByText(title)).toBeTruthy();

    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);

    expect(getByTestId("test-title").innerHTML).toContain(title);
  });

  test("Debe de mostrar el subtitutlo enviado por props", () => {
    const title = "Hola, soy Goku";
    const subTitle = "Soy un subtitulo";
    const { getAllByText } = render(
      // getAllByText busca todos los elementos que contengan el texto
      <FirstApp title={title} subTitle={subTitle} /> // renderiza el componente
    );
    expect(getAllByText(subTitle).length).toBe(2); // 2 porque el subtitulo se repite
  });
});
