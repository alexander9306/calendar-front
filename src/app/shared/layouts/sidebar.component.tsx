import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  CSidebarMinimizer,
  CImg,
  CSidebarNavTitle,
  CSidebar,
  CSidebarNav,
} from "@coreui/react";
import {
  AiOutlineUser,
  AiOutlineLineChart,
  AiOutlineSolution,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { sidebarShowVar } from "../../../apollo-client/variables";
import { CSidebarBrand as SidebarBrand } from "../coreui";
import { SidebarLogoImageQuery } from "../../generated/static";
import { useGetSideBarShowQuery } from "../../generated/api";
import { useGetSessionPermisos, PermisoNames, CategoriaNames } from "../utils";
import getListItem from "./get-sidebar-list";

const Sidebar: React.FunctionComponent = () => {
  const sidebarLogo = useStaticQuery<SidebarLogoImageQuery>(graphql`
    query SidebarLogoImage {
      file(relativePath: {eq: "logo-bg-white.png"}) {
        childImageSharp {
          full: resize(height:48){
            src
          }
          small: resize(height:36 width:45 fit:INSIDE){
            src
          }
        }
      }
    }
  `);

  const userPermisos = useGetSessionPermisos();

  const {
    data: { sidebarShow } = { sidebarShow: "responsive" },
  } = useGetSideBarShowQuery();

  const ListItem = getListItem(userPermisos);

  return (
    <CSidebar
      size="sm"
      show={sidebarShow}
      onShowChange={(value: CSidebar["show"]) => sidebarShowVar(value)}
    >
      <SidebarBrand className="d-md-down-none" to="/app/">
        <CImg
          src={sidebarLogo.file?.childImageSharp?.full?.src ?? ""}
          className="c-sidebar-brand-full"
          alt="Logo"
        />
        <CImg
          src={sidebarLogo.file?.childImageSharp?.small?.src ?? ""}
          className="c-sidebar-brand-minimized"
          alt="Logo"
        />
      </SidebarBrand>
      <CSidebarNav>
        {process.env.NODE_ENV !== "production" && (
          <ListItem name="Gráficos" isNew icon={AiOutlineLineChart} />
        )}
        {!!userPermisos.tienda.length && (
          <>
            <CSidebarNavTitle>{CategoriaNames.TIENDA}</CSidebarNavTitle>
            <ListItem
              to="ordenes"
              name="Ordenes"
              icon={AiOutlineShoppingCart}
              category={CategoriaNames.TIENDA}
              permisos={[PermisoNames.ORDENES_READ]}
            />
            <ListItem
              to="tickets-cambio"
              name="Tickets"
              isNew
              icon={AiOutlineSolution}
              category={CategoriaNames.TIENDA}
              permisos={[PermisoNames.TICKET_CAMBIO_READ]}
            />
          </>
        )}
        {!!userPermisos.admin.length && (
          <>
            <CSidebarNavTitle>{CategoriaNames.ADMIN}</CSidebarNavTitle>
            <ListItem
              to="usuarios"
              name="Usuarios"
              icon={AiOutlineUser}
              category={CategoriaNames.ADMIN}
              permisos={[PermisoNames.USUARIOS_READ]}
            />
          </>
        )}
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(Sidebar);
