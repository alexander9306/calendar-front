import React from "react";
import { rest } from "msw";
import {
  render,
  screen,
  waitFor,
  server,
  userEvent,
  fireEvent,
  act,
} from "test-utils";
import { toCurrency } from "../shared/utils";
import Ordenes from "./ordenes.component";

import {
  GetOrdenesQuery,
  GetOrdenesQueryVariables,
  GetOrdenQueryVariables,
  GetOrdenQuery,
} from "../generated/api";

interface GetOrdenBody {
  variables: GetOrdenQueryVariables;
  operationName: string;
}

interface GetOrdenesBody {
  variables: GetOrdenesQueryVariables;
  operationName: string;
}
interface Response {
  data?: GetOrdenesQuery | GetOrdenQuery;
  errors?: { message: string }[];
}
const url = process.env.API_URI ?? "https://localhost:5000/graphql";

describe("Ordenes Component", () => {
  describe("Verify API Comunication and UI Changes", () => {
    test("Verify orden's number shows up", async () => {
      server.use(
        rest.post(url, (req, res, ctx) => {
          const response: Response = {
            data: {
              ordenes: [
                {
                  fecha_registro: "2020-07-16T17:27:06.000Z",
                  tienda: "PL-18",
                  orden: "112",
                  estatus: 2,
                  total: 15750 + 38845 + 995,
                },
                {
                  fecha_registro: "2020-07-16T17:30:06.000Z",
                  tienda: "PL-18",
                  orden: "113",
                  estatus: 2,
                  total: 15750 + 38845 + 995,
                },
              ],
            },
          };
          return res(ctx.json<Response>(response));
        })
      );

      render(<Ordenes />);

      await waitFor(() => {
        expect(screen.getByText("112")).toBeInTheDocument();
      });
    });
    test("Verify tienda's code shows up", async () => {
      render(<Ordenes />);

      await waitFor(() => {
        expect(screen.getAllByText("PL-18")).toHaveLength(2);
      });
    });

    test("Verify status shows up correctly", async () => {
      render(<Ordenes />);

      await waitFor(() => {
        expect(screen.getAllByText("completado")).toHaveLength(2);
      });
    });
  });

  describe("Verify Orden details renders correctly", () => {
    test("Verify details loading indicator shows up after a click", async () => {
      render(<Ordenes />);

      const ordenDiv = await screen.findByText("112");
      userEvent.click(ordenDiv);

      expect(screen.getByRole("status")).toBeInTheDocument();
    });
    test("Verify customer's name shows up after a click", async () => {
      render(<Ordenes />);

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
                  estatus: 2,
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
          return res(ctx.json(response));
        })
      );

      const ordenDiv = await screen.findByText("112");
      userEvent.click(ordenDiv);

      await waitFor(() => {
        expect(screen.getByText(/DAVID/i)).toBeInTheDocument();
      });
    });

    test("Verify customer's name doesn't show up after clicking the orden's row twice", async () => {
      render(<Ordenes />);

      const ordenDiv = await screen.findByText("112");
      userEvent.click(ordenDiv);
      userEvent.click(ordenDiv);

      expect(screen.queryByText("Cliente")).not.toBeInTheDocument();
    });
    test("Verify customer's name doesn't show up after clicking another orden's row", async () => {
      server.use(
        rest.post<GetOrdenBody>(url, (req, res, ctx) => {
          const {
            variables: { orden },
          } = req.body;

          interface OrdenDictionary {
            [key: string]: GetOrdenQuery["ordenes"][0];
          }

          const ordenes: OrdenDictionary = {
            112: {
              orden: "112",
              nota: "",
              nombre: "DAVID",
              apellidos: "PAULINO ACOSTA",
              estatus: 2,
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
                  descripcion: "Atun Claro en Aceite de Girasol Diamir 1800g",
                  depto: "supermercado",
                  estatus: 2,
                  precio: 995,
                  total: 995,
                },
              ],
            },
            113: {
              orden: "113",
              nota: "",
              nombre: "JULIO",
              apellidos: "RAMON",
              estatus: 2,
              fecha_completada: "2020-07-16T17:30:06.000Z",
              total: 15750,
              tiempo_estimado: "40 minutos",
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
              ],
            },
          };

          const response = {
            data: {
              ordenes: [ordenes[orden]],
            },
          };
          return res(ctx.json(response));
        })
      );

      render(<Ordenes />);

      const firstOrdenDiv = await screen.findByText("112");
      userEvent.click(firstOrdenDiv);

      const firstCustomerDiv = await screen.findByText(/DAVID/);
      expect(firstCustomerDiv).toBeInTheDocument();

      const secondOrdenDiv = screen.getByText("113");
      userEvent.click(secondOrdenDiv);

      const secondCustomerDiv = await screen.findByText(/JULIO/);
      expect(secondCustomerDiv).toBeInTheDocument();

      expect(screen.queryByText(/DAVID/i)).not.toBeInTheDocument();
    });
  });

  describe("Verify Ordenes Busquedas", () => {
    test("Verify busqueda component provide only one order search by order number.", async () => {
      render(<Ordenes />);
      await screen.findByText("113");

      server.use(
        rest.post<GetOrdenesBody>(url, (req, res, ctx) => {
          const { operationName } = req.body;

          if (operationName === "GetOrdenes") {
            return res(
              ctx.json<Response>({
                data: {
                  ordenes: [
                    {
                      fecha_registro: "2020-07-16T17:27:06.000Z",
                      tienda: "PL-18",
                      orden: "114",
                      estatus: 2,
                      total: 15750 + 38845 + 995,
                    },
                  ],
                },
              })
            );
          }
          const response: Response = {
            data: {
              ordenes: [
                {
                  orden: "114",
                  nota: "",
                  nombre: "JUAN",
                  apellidos: "RAMIREZ",
                  estatus: 2,
                  fecha_completada: "2020-07-16T17:35:06.000Z",
                  total: 15750 + 38845 + 995,
                  tiempo_estimado: "46 minutos",
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

      const busquedaInput = screen.getByPlaceholderText(/Buscar ordenes/i);

      userEvent.type(busquedaInput, "114");
      userEvent.click(screen.getByText("Buscar"));

      const ordenDiv = await screen.findByText("114");
      expect(screen.queryByText("113")).not.toBeInTheDocument();
      userEvent.click(ordenDiv);

      const clienteDiv = await screen.findByText("JUAN RAMIREZ");

      expect(clienteDiv).toBeInTheDocument();
    });
  });

  describe("Verify Ordenes Fechas select", () => {
    test("Verify busqueda component provide only one order search by order number.", async () => {
      render(<Ordenes />);
      await screen.findByText("113");

      server.use(
        rest.post<GetOrdenesBody>(url, (req, res, ctx) => {
          const { operationName } = req.body;

          if (operationName === "GetOrdenes") {
            return res(
              ctx.json<Response>({
                data: {
                  ordenes: [
                    {
                      fecha_registro: "2020-07-16T17:27:06.000Z",
                      tienda: "PL-18",
                      orden: "114",
                      estatus: 2,
                      total: 15750 + 38845 + 995,
                    },
                  ],
                },
              })
            );
          }
          const response: Response = {
            data: {
              ordenes: [
                {
                  orden: "114",
                  nota: "",
                  nombre: "JUAN",
                  apellidos: "RAMIREZ",
                  estatus: 2,
                  fecha_completada: "2020-07-16T17:35:06.000Z",
                  total: 15750 + 38845 + 995,
                  tiempo_estimado: "46 minutos",
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

      const fechasSelectDiv = screen.getByTestId("select-fechas");

      userEvent.selectOptions(fechasSelectDiv, "1");
      const ordenDiv = await screen.findByText("114");
      expect(ordenDiv).toBeInTheDocument();
    });
  });

  describe("Verify more data is pulled when the user scroll down", () => {
    test("Verify stops making request if there are no data.", async () => {
      render(<Ordenes />);
      const ordenDiv = await screen.findByText("112");
      expect(ordenDiv).toBeInTheDocument();

      const response: Response = {
        data: {
          ordenes: [],
        },
      };
      server.use(
        rest.post<GetOrdenesBody>(url, (req, res, ctx) => {
          return res(ctx.json<Response>(response));
        })
      );

      fireEvent.scroll(window, { target: { scrollY: 100 } });

      expect(screen.getByText("112")).toBeInTheDocument();
    });

    test("Verify incomming ordenes gets merge after scrolling down.", async () => {
      render(<Ordenes />);

      server.use(
        rest.post<GetOrdenesBody>(url, (req, res, ctx) => {
          const response: Response = {
            data: {
              ordenes: [
                {
                  fecha_registro: "2020-07-16T17:27:06.000Z",
                  tienda: "PL-18",
                  orden: `114`,
                  estatus: 2,
                  total: 15750 + 38845 + 995,
                },
              ],
            },
          };
          return res(ctx.json(response));
        })
      );

      fireEvent.scroll(window, {
        target: { scrollY: 100 },
      });

      const ordenDiv = await screen.findByText("114");

      expect(ordenDiv).toBeInTheDocument();
    });

    test("Verify data new ordentes shows up after scrolling down. Verify orden number used for pagination match last one", async () => {
      render(<Ordenes />);

      server.use(
        rest.post<GetOrdenesBody>(url, (req, res, ctx) => {
          const { variables } = req.body;

          const response: Response = {
            data: {
              ordenes: [
                {
                  fecha_registro: "2020-07-16T18:27:06.000Z",
                  tienda: "PL-18",
                  orden: "115",
                  estatus: 2,
                  total: 15750 + 38845 + 99,
                },
              ],
            },
          };
          if (variables.after?.orden === "114") return res(ctx.json(response));
          return res(ctx.json({}));
        })
      );

      fireEvent.scroll(window, {
        target: { scrollY: 100 },
      });

      const ordenDiv = await screen.findByText("115");

      expect(ordenDiv).toBeInTheDocument();
    });
  });

  describe("Verify cache data gets updated", () => {
    test("Verify data gets requested after waiting for the poolInterval time to be fullfill", async () => {
      server.use(
        rest.post<GetOrdenesBody>(url, (req, res, ctx) => {
          return res(
            ctx.json<Response>({
              data: {
                ordenes: [
                  {
                    fecha_registro: "2020-07-16T17:27:06.000Z",
                    tienda: "PL-18",
                    orden: "112",
                    estatus: 2,
                    total: 15750 + 38845 + 995,
                  },
                  {
                    fecha_registro: "2020-07-16T17:30:06.000Z",
                    tienda: "PL-18",
                    orden: "113",
                    estatus: 2,
                    total: 15750 + 38845 + 995,
                  },

                  {
                    fecha_registro: "2020-07-16T17:31:06.000Z",
                    tienda: "PL-18",
                    orden: "116",
                    estatus: 2,
                    total: 15750 + 38845 + 996,
                  },
                ],
              },
            })
          );
        })
      );

      render(<Ordenes />);
      expect(screen.queryByText("116")).not.toBeInTheDocument();

      const wait = () => new Promise((resolve) => setTimeout(resolve, 150));

      await act(async () => {
        await wait();
      });

      const ordenDiv = await screen.findByText("116");

      expect(ordenDiv).toBeInTheDocument();
    });
  });

  describe("Verify No Datos component", () => {
    test("Verify No Datos component renders when there are no ordenes", async () => {
      render(<Ordenes />);
      // Make sure orders are populated.
      await screen.findByText("113");

      server.use(
        rest.post<GetOrdenesBody>(url, (req, res, ctx) => {
          const response = {
            data: {
              ordenes: [],
            },
          };
          return res(ctx.json<Response>(response));
        })
      );

      const busquedaInput = await screen.findByPlaceholderText(
        /Buscar ordenes/i
      );
      userEvent.type(busquedaInput, "115");
      userEvent.click(screen.getByText("Buscar"));

      const noDatosDiv = await screen.findByText("No hay datos");
      expect(noDatosDiv).toBeInTheDocument();

      expect(screen.queryByText("113")).not.toBeInTheDocument();
    });
  });
});

describe("Verify apollo client merge & read functions functionality", () => {
  test("Verify orden number 116 total contains the dollar '$' sign", () => {
    render(<Ordenes />);

    expect(screen.getByText("116")).toBeInTheDocument();
    expect(
      screen.getByText(toCurrency(15750 + 38845 + 996))
    ).toBeInTheDocument();
  });
});
