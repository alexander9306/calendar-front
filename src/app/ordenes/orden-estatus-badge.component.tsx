import React from "react";
import { CBadge } from "../shared/coreui";
import { OrdenEstatus } from "../generated/api";

interface BadgeProps {
  estatus: OrdenEstatus;
}

const OrdenStatus: React.FunctionComponent<BadgeProps> = ({ estatus }) => {
  if (estatus === OrdenEstatus.Pendiente)
    return <CBadge color="warning">pendiente</CBadge>;
  if (estatus === OrdenEstatus.Cancelada)
    return <CBadge color="danger">cancelado</CBadge>;
  if (estatus === OrdenEstatus.CompletadaParcial)
    return (
      <CBadge style={{ backgroundColor: "#2eb8a1", color: "white" }}>
        completado parcial
      </CBadge>
    );
  return <CBadge color="success">completado</CBadge>;
};

export default OrdenStatus;
