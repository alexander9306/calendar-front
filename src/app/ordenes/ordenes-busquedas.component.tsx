import React from "react";
import BusquedaInput from "../shared/busqueda-input.component";

interface IDataProp {
  getByOrden: (orden: string) => void;
}

const OrdenesBusqueda: React.FunctionComponent<IDataProp> = ({
  getByOrden,
}) => {
  type OnSubmit = (values: { orden: string }) => void;
  const onSubmit: OnSubmit = ({ orden }) => getByOrden(orden);

  return (
    <BusquedaInput
      placeholder="Buscar ordenes..."
      name="orden"
      onSubmit={onSubmit}
    />
  );
};

export default OrdenesBusqueda;
