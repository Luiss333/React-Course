import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en useForm", () => {
  const initialForm = {
    name: "Luis",
    email: "luis.0125@hotmail.com",
  };
  test("debe de regresar los valores por defecto", () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("debe de cambiar el nombre del formulario", () => {
    const newValue = "Juan";

    //montar el hook
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    // onInputChange() // act, event...
    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });
    });

    //ecpect, result.current.name === Juan
    expect(result.current.name).toBe(newValue);
    //ecpect, result.current.formState.name === Juan
    expect(result.current.formState.name).toBe(newValue);
  });

  test("debe de realizar el reset del formulario", () => {
    const newValue = "Juan";

    //montar el hook
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    // onInputChange() // act, event...
    act(() => {
      onInputChange({
        target: {
          name: "name",
          value: newValue,
        },
      });
      onResetForm();
    });

    //ecpect, result.current.name === Juan
    expect(result.current.name).toBe(initialForm.name);
    //ecpect, result.current.formState.name === Juan
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
