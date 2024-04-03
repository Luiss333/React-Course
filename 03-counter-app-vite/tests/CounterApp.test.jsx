import { render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en <CounterApp/>", () => {
  
  const initialValue = 10;

  test("debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar el valor por defecto de 100", () => {
    render(<CounterApp value={100} />);
    expect(screen.getByText("100")).toBeTruthy();
  });

});
