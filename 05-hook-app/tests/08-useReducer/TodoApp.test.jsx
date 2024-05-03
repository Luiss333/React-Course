import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodoHook/useTodos";

jest.mock("../../src/hooks/useTodoHook/useTodos");

describe("Pruebas en <TodoApp/>", () => {
  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        desc: "Todo #1",
        done: false,
      },
      {
        id: 2,
        desc: "Todo #2",
        done: false,
      },
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleNewTodo: jest.fn(),
  });

  test("debe de mostrar el componente correctamente", () => {
    render(<TodoApp />);
    //screen.debug();
    expect(screen.getByText("Todo #1")).toBeTruthy();
    expect(screen.getByText("Todo #2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
