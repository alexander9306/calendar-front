import { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import { GetOrdenesQueryVariables } from "../generated/api";
import getFechas from "./ordenes-fechas-get-fechas";
import { APIDateFormatter } from "../shared/utils";

function useOrdenesWhere(): [
  typeof where,
  typeof getByOrden,
  typeof getByFecha
] {
  const { today } = getFechas();
  const initialState = {
    fecha_registro: {
      gte: new APIDateFormatter(today).toISOString(),
    },
  };

  const [lastWhere, setLastWhere] = useState<GetOrdenesQueryVariables["where"]>(
    initialState
  );

  const [where, setWhere] = useState<GetOrdenesQueryVariables["where"]>(
    initialState
  );

  const getByOrden = (orden: string) => {
    setWhere(
      isEmpty(orden, { ignore_whitespace: true })
        ? lastWhere
        : { orden: { equals: orden } }
    );
  };

  function getByFecha(input: GetOrdenesQueryVariables["where"]) {
    setLastWhere(input);
    setWhere(input);
  }

  return [where, getByOrden, getByFecha];
}

export default useOrdenesWhere;
