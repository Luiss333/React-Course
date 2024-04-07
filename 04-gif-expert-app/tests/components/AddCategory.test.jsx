import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  test("Debe de cambiar elvalor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Luffy" } });
    expect(input.value).toBe("Luffy");
    //screen.debug();
  });

  test("Debede llamar onNewCategory si el input tiene un valor", () => {
    const inputValue = "Luffy";
    //TODO: ???
    render(<AddCategory onNewCategory={() => {}} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    //screen.debug();
    expect(input.value).toBe("");
  });
});
