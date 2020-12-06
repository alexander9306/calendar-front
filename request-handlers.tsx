// this is only to prepare the test
// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw";
import {
  GetOrdenesQueryVariables,
  GetOrdenQueryVariables,
} from "./src/app/generated/api";

// interface Response {
//   data?: GetOrdenesQuery;
//   errors?: { message: string }[];
// }
interface RequestBody {
  operationName: string;
  variables: GetOrdenesQueryVariables | GetOrdenQueryVariables;
}
interface OperationDictionary {
  [key: string]: unknown;
}

const url = "https://localhost:5000/graphql";

const requestHandlers = [
  rest.post<RequestBody>(url, (req, res, ctx) => {
    const { operationName } = req.body;

    const operations: OperationDictionary = {
      GetOrdenes: {
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
          // {
          //   fecha_registro: "2020-07-16T17:27:06.000Z",
          //   tienda: "PL-18",
          //   orden: "114",
          //   estatus: 2,
          //   total: 15750 + 38845 + 995,
          // },
        ],
      },
    };

    const response = {
      data: operations[operationName],
    };

    return res(ctx.json(response));
  }),
];

export default requestHandlers;
