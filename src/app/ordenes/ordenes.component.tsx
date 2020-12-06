import React, { useState } from "react";
import { CCol, CCollapse } from "@coreui/react";
import { TableWithInfiteScroll, Row, Cell } from "../shared/table";
import useOrdenesAPI from "./ordenes.api";
import SEO from "../seo";
import OrdenStatus from "./orden-estatus-badge.component";
import OrdenesDetails from "./orden-details.component";
import OrdenesFechas from "./ordenes-fechas.component";
import OrdenesBusquedas from "./ordenes-busquedas.component";
import useOrdenesWhere from "./ordenes-set-where";
import NoDatos from "../shared/no-datos.component";
import { toCurrency, dateFormatter } from "../shared/utils";

const Ordenes: React.FunctionComponent = () => {
  const [accordion, setAccordion] = useState("");
  const [where, getByOrden, getByFecha] = useOrdenesWhere();
  const [ordenes, fetchMoreData, hasMore, loading] = useOrdenesAPI(where);

  return (
    <>
      <SEO title="Ordenes" />
      <CCol md="12" xs="12" lg="12">
        <OrdenesFechas getByFecha={getByFecha} />
        <OrdenesBusquedas getByOrden={getByOrden} />
        {!loading && !ordenes.length && <NoDatos />}
        {!!ordenes.length && (
          <TableWithInfiteScroll
            headers={[
              "Orden",
              "Fecha de registro",
              "Tienda",
              "Estado",
              "Total",
            ]}
            fetchMoreData={fetchMoreData}
            hasMore={hasMore}
            dataLength={ordenes.length}
            isLoading={loading}
          >
            {ordenes.map((orden) => (
              <div
                key={orden.orden}
                style={{ paddingTop: accordion === orden.orden ? 10 : 0 }}
              >
                <Row
                  onClick={() =>
                    setAccordion(accordion === orden.orden ? "" : orden.orden)
                  }
                >
                  <Cell dataTitle="Orden">{orden.orden}</Cell>
                  <Cell dataTitle="Fecha de registro">
                    {dateFormatter(orden.fecha_registro)}
                  </Cell>
                  <Cell dataTitle="Tienda">{orden.tienda}</Cell>
                  <Cell dataTitle="Estatus">
                    <OrdenStatus estatus={orden.estatus} />
                  </Cell>
                  <Cell boldText dataTitle="Total">
                    {toCurrency(orden.total)}
                  </Cell>
                </Row>
                <CCollapse
                  show={accordion === orden.orden}
                  style={{ backgroundColor: "#fff" }}
                >
                  {accordion === orden.orden && (
                    <OrdenesDetails orden={orden.orden} />
                  )}
                </CCollapse>
              </div>
            ))}
          </TableWithInfiteScroll>
        )}
      </CCol>
    </>
  );
};

export default Ordenes;
