import React from "react";
import { rest } from "msw";
import { render, screen, waitFor, server } from "test-utils";

import OrdenDetails from "./orden-details.component";
import { GetOrdenQuery, OrdenEstatus } from "../generated/api";

interface Response {
  data?: GetOrdenQuery;
  errors?: { message: string }[];
}
const url = process.env.API_URI ?? "https://localhost:5000/graphql";

describe("Orden Details Component", () => {
  test("Verify loading indicator shows up when it is loading", () => {
    render(<OrdenDetails orden="272" />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
  describe("Verify API Comunication and UI Changes", () => {
    test("Verify client's name shows up on the screen", async () => {
      server.use(
        rest.post(url, (req, res, ctx) => {
          const response: Response = {
            data: {
              ordenes: [
                {
                  orden: "112",
                  nota: "",
                  nombre: "DAVID",
                  apellidos: "PAULINO ACOSTA",
                  estatus: OrdenEstatus.Completada,
                  fecha_completada: "2020-07-16T17:27:06.000Z",
                  total: 15750 + 38845 + 995,
                  tiempo_estimado: "36 minutos",
                  articulos: [
                    {
                      codigo: "63db901f-e943-11ea-ad32-2cfda1e3e678",
                      cantidad: 1,
                      sku: "54547",
                      descripcion: "Colchon Firme Postopedico de la Reina Full",
                      depto: "colchones",
                      estatus: 0,
                      precio: 15750,
                      total: 15750,
                    },
                    {
                      codigo: "63db9121-e943-11ea-ad32-2cfda1e3e678",
                      cantidad: 1,
                      sku: "54547",
                      descripcion:
                        "Aire Acondicionado  Inverter Tecnomaster MAUJI1818",
                      depto: "lineablanca",
                      estatus: 0,
                      precio: 38845,
                      total: 38845,
                    },
                    {
                      codigo: "63db9257-e943-11ea-ad32-2cfda1e3e678",
                      sku: "54547",
                      cantidad: 1,
                      descripcion:
                        "Atun Claro en Aceite de Girasol Diamir 1800g",
                      depto: "supermercado",
                      estatus: 2,
                      precio: 995,
                      total: 995,
                    },
                  ],
                },
              ],
            },
          };
          return res(ctx.json<Response>(response));
        })
      );

      render(<OrdenDetails orden="112" />);

      await waitFor(() => {
        expect(screen.getByText("DAVID PAULINO ACOSTA")).toBeInTheDocument();
      });
    });

    test("Verify items are display on the screen", async () => {
      render(<OrdenDetails orden="112" />);

      await screen.findByText("Detalles del pedido");

      expect(
        screen.getByText(/Colchon Firme Postopedico de la Reina Full/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Aire Acondicionado Inverter Tecnomaster MAUJI1818/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Atun Claro en Aceite de Girasol Diamir 1800g/)
      ).toBeInTheDocument();
    });

    test("Verify error message gets shown", async () => {
      server.use(
        rest.post(url, (req, res, ctx) => {
          const response: Response = {
            errors: [
              {
                message: "Hubo un error con la peticion.",
              },
            ],
          };
          return res(ctx.json<Response>(response));
        })
      );
      render(<OrdenDetails orden="113" />);
      await waitFor(() => {
        expect(
          screen.getByText("Hubo un error con la peticion.")
        ).toBeInTheDocument();
      });
    });

    test("Verify message is shown when no orden is found", async () => {
      server.use(
        rest.post(url, (req, res, ctx) => {
          const response: Response = {
            data: {
              ordenes: [],
            },
          };
          return res(ctx.json<Response>(response));
        })
      );
      render(<OrdenDetails orden="113" />);
      await waitFor(() => {
        expect(screen.getByText("Orden no encontrada.")).toBeInTheDocument();
      });
    });
  });
});
