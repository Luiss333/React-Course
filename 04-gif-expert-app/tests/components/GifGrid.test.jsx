import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe("Pruebas en <GifGrid/>", () => {
  const category = "One Piece";

  test("Debe de mostrar el loadinf inicialmente", () => {
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
    //screen.debug();
  });

  test("Debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {});
});
