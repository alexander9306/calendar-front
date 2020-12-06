import React from "react";
import { create } from "react-test-renderer";
import { render, screen, userEvent, waitFor } from "test-utils";
import BusquedaInput from "./busqueda-input.component";

describe("Busqueda input Component", () => {
  test("Verify component renders correctly", () => {
    const tree = create(
      <BusquedaInput
        placeholder="Buscar ordenes..."
        name="orden"
        onSubmit={() => ({})}
      />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("Verify component readability", () => {
    test("Verify placeholder text", () => {
      render(
        <BusquedaInput
          placeholder="Buscar ordenes..."
          name="orden"
          onSubmit={() => ({})}
        />
      );
      expect(
        screen.getByPlaceholderText("Buscar ordenes...")
      ).toBeInTheDocument();
    });

    test("Verify parameters are passed with the same name to the onSubmit function after a submit", async () => {
      const onSubmit = jest.fn();
      render(
        <BusquedaInput
          placeholder="Buscar ordenes..."
          name="orden"
          onSubmit={onSubmit}
        />
      );

      const input = await screen.findByPlaceholderText("Buscar ordenes...");
      userEvent.type(input, "112");

      const submitBtn = await screen.findByText("Buscar");
      userEvent.click(submitBtn);

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });

      expect(onSubmit.mock.calls[0][0]).toEqual({
        orden: "112",
      });
    });

    test("Verify parameters are passed with the same name to the onSubmit function after a submit but and with the right value", async () => {
      const onSubmit = jest.fn();
      render(
        <BusquedaInput
          placeholder="Buscar ordenes..."
          name="orden"
          onSubmit={onSubmit}
        />
      );

      const input = await screen.findByPlaceholderText("Buscar ordenes...");
      userEvent.type(input, "112");

      const submitBtn = await screen.findByText("Buscar");
      userEvent.click(submitBtn);

      await waitFor(() => {
        expect(onSubmit.mock.calls[0][0]).not.toEqual({
          orden: "110",
        });
      });
    });
  });
});
