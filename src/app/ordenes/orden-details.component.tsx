import React from "react";
import { CCol, CContainer, CRow, CSpinner } from "@coreui/react";
import useOrdenesDetailsAPI from "./orden-details.api";
import { OrdenEstatus } from "../generated/api";
import { toCurrency, dateFormatter } from "../shared/utils";
import { CBadge } from "../shared/coreui";

interface IDataProps {
  orden: string;
}

const OrdenesDetails: React.FunctionComponent<IDataProps> = ({
  orden: nOrden,
}) => {
  const [orden, loading, error] = useOrdenesDetailsAPI({
    orden: nOrden,
  });

  if (loading)
    return (
      <div className="text-center">
        <CSpinner style={{ width: "4rem", height: "4rem" }} color="primary" />
      </div>
    );

  const minusArticulos: typeof orden.articulos = [];
  let minusTotal = 0;

  if (error) return <p>{error.message}</p>;

  if (!orden) return <p>Orden no encontrada.</p>;

  return (
    <>
      <CContainer fluid style={{ paddingTop: 25 }}>
        <CRow>
          <CCol xs="12" sm="6">
            <h4 className="card-title mb-1">Cliente</h4>
            <p>
              {orden.nombre} {orden.apellidos}
            </p>
            {orden.estatus !== OrdenEstatus.Pendiente && (
              <>
                <h4 className="card-title mb-1">Confirmación</h4>
                <div className="small text-muted">Fecha de entrega</div>
                <p>{dateFormatter(orden.fecha_completada)}</p>
                <div className="small text-muted">Duración aproximada</div>
                <p>{orden.tiempo_estimado}</p>
              </>
            )}
          </CCol>
          <CCol xs="12" sm="6">
            <h4 className="card-title mb-1">Detalles del pedido</h4>
            {orden.articulos.map((articulo) => {
              let cantidad = 0;
              if (
                orden.estatus === OrdenEstatus.CompletadaParcial &&
                articulo.cant_add !== articulo.cantidad
              ) {
                cantidad = Math.abs(
                  (articulo.cantidad ?? 0) - (articulo.cant_add ?? 0)
                );
                const newArticulo = { ...articulo };
                newArticulo.cantidad = cantidad;
                newArticulo.total = cantidad * (articulo.precio ?? 0);
                minusArticulos.push(newArticulo);
                minusTotal += newArticulo.total;
              }

              if (articulo.remplazo) {
                const { remplazo } = articulo;
                return (
                  <div key={articulo.codigo} style={{ paddingTop: 2 }}>
                    <div className="small text-muted">
                      {articulo.depto.toUpperCase()}
                    </div>
                    <div className="">
                      <del style={{ float: "right" }}>
                        {toCurrency(remplazo.total)}
                      </del>
                      <del>
                        {remplazo.cantidad} x {remplazo.descripcion}{" "}
                        <CBadge title="Remplazado" color="danger">
                          R
                        </CBadge>
                      </del>
                    </div>
                    <div style={{ paddingTop: 2 }}>
                      {articulo.cantidad} x {articulo.descripcion}{" "}
                      {articulo.picking === 0 && (
                        <CBadge color="success">centro</CBadge>
                      )}
                      <div style={{ float: "right" }}>
                        {toCurrency(articulo.total)}
                      </div>
                      <div>{articulo.sku}</div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={articulo.codigo} style={{ paddingTop: 2 }}>
                  <div className="small text-muted">
                    {articulo.depto.toUpperCase()}
                  </div>
                  {articulo.cantidad} x {articulo.descripcion}{" "}
                  {articulo.picking === 0 && (
                    <CBadge color="success">centro</CBadge>
                  )}
                  <div style={{ float: "right" }}>
                    {toCurrency(articulo.total)}
                  </div>
                  <div>{articulo.sku}</div>
                </div>
              );
            })}

            {!!minusArticulos.length && (
              <>
                <hr />
                <p>
                  Subtotal{" "}
                  <div style={{ float: "right" }}>
                    {toCurrency(orden.total)}
                  </div>
                  <br />
                </p>
                <hr />
                <h4 className="card-title mb-2 mt-2">No enviados</h4>
                {minusArticulos.map((articulo) => {
                  return (
                    <div key={articulo.codigo} style={{ paddingTop: 2 }}>
                      <div className="small text-muted">
                        {articulo.depto.toUpperCase()}
                      </div>
                      {articulo.cantidad} x {articulo.descripcion}{" "}
                      <div style={{ float: "right" }} className="text-danger">
                        - {toCurrency(articulo.total)}
                      </div>
                      <div>{articulo.sku}</div>
                    </div>
                  );
                })}
                <hr />
                <div className="text-danger">
                  Subtotal
                  <div style={{ float: "right" }}>
                    - {toCurrency(minusTotal)}
                  </div>
                </div>
                <br />
              </>
            )}
            <hr style={{ border: "0.04px solid" }} />
            <h4 className="card-title mb-1">
              Total
              <div style={{ float: "right" }}>
                {toCurrency(
                  orden.estatus === OrdenEstatus.Cancelada
                    ? 0
                    : (orden.total ?? 0) - minusTotal
                )}
              </div>
            </h4>
          </CCol>
        </CRow>
      </CContainer>
      <hr />
    </>
  );
};

export default OrdenesDetails;
