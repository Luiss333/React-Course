import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe de regresar el estado incial", () => {
    const { result } = renderHook(() => useFetchGifs("One piece"));
    const { images, isLoading } = result.current;
    //useFetchGifs();

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe de retornar un arreglo de imagenes y el isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("One piece"));

    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 5000, // 5 segundos para que se cumpla la condición
      }
    );

    const { images, isLoading } = result.current;
    //useFetchGifs();

    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
    console.log(result);
  });
});
