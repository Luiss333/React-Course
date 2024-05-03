import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("Pruebas en <MultipleCustomHooks/>", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    //Diferentes formas de hacer el test

    // 1. Forma - Usando el snapshot
    // const { container } = render(<MultipleCustomHooks />);
    // expect(container).toMatchSnapshot();

    // 2. Forma - Usando screen.debug()
    render(<MultipleCustomHooks />);

    expect(screen.getByText("Informacion de Pokemon"));
    expect(screen.getByText("Cargando..."));

    const buttons = screen.getAllByRole("button", {
      name: "Anterior",
      name: "Siguiente",
    });
  });
  test("Debe de mostrar un Pokemon", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "bulbasaur",
        sprites: {
          back_default: "back_default",
          back_shiny: "back_shiny",
          front_default: "front_default",
          front_shiny: "front_shiny",
        },
      },

      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText("#1 - bulbasaur")).toBeTruthy();
  });

  test("debe de llamar la funcion de incrementar ", () => {
    useFetch.mockReturnValue({
      data: {
        id: 1,
        name: "bulbasaur",
        sprites: {
          back_default: "back_default",
          back_shiny: "back_shiny",
          front_default: "front_default",
          front_shiny: "front_shiny",
        },
      },

      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const buttonSiguiente = screen.getByRole("button", { name: "Siguiente" });
    fireEvent.click(buttonSiguiente);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
