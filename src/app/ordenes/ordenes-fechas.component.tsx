import React, { FormEventHandler, FunctionComponent } from "react";
import { CCol, CFormGroup } from "@coreui/react";
import type { GetOrdenesQueryVariables } from "../generated/api";
import getFechas from "./ordenes-fechas-get-fechas";
import setFechas from "./ordenes-fechas-set-fechas";

interface IDataProp {
  getByFecha: (input: GetOrdenesQueryVariables["where"]) => void;
}

function getDateAndMonth(date: Date) {
  const [day, month] = [
    Intl.DateTimeFormat("es-Do", {
      day: "2-digit",
    }).format(date),
    Intl.DateTimeFormat("es-Do", {
      month: "2-digit",
    }).format(date),
  ];
  return `${day}/${month}`;
}

const OrdenesFechas: FunctionComponent<IDataProp> = ({ getByFecha }) => {
  const dates = getFechas();
  const {
    today,
    lastSunday,
    previousSunday,
    previosSaturday,
    thisMonth,
    previousMonth,
  } = dates;

  const handleChange: FormEventHandler<HTMLSelectElement> = (e) => {
    getByFecha(setFechas(dates, parseInt(e.currentTarget.value, 10)));
  };

  return (
    <>
      <CFormGroup row>
        <CCol xs="12" md="6">
          <select
            className="custom-select custom-select-lg"
            data-testid="select-fechas"
            onChange={handleChange}
          >
            <option value="0">
              Hoy{" "}
              {Intl.DateTimeFormat("es-Do", {
                weekday: "long",
                day: "numeric",
                month: "long",
              }).format(today)}
            </option>
            <option value="1">
              Semana actual {getDateAndMonth(lastSunday)} -{" "}
              {getDateAndMonth(today)}
            </option>
            <option value="2">
              Semana anterior {getDateAndMonth(previousSunday)} -{" "}
              {getDateAndMonth(previosSaturday)}
            </option>
            <option value="3">
              Mes actual{" "}
              {Intl.DateTimeFormat("es-Do", {
                month: "long",
              }).format(thisMonth)}
            </option>
            <option value="4">
              Mes anterior{" "}
              {Intl.DateTimeFormat("es-Do", {
                month: "long",
              }).format(previousMonth)}
            </option>
            <option value="5">Últimos 3 meses</option>
            <option value="6">Últimos 6 meses</option>
          </select>
        </CCol>
      </CFormGroup>
    </>
  );
};

export default OrdenesFechas;
