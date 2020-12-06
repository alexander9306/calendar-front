import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { CHeader, CToggler, CSidebar, CHeaderNav, CImg } from "@coreui/react";
import { HeaderLogoImageQuery } from "../../generated/static";
import { sidebarShowVar } from "../../../apollo-client/variables";
import { useGetSideBarShowQuery } from "../../generated/api";
import TheHeaderDropdown from "./header-dropdown.component";
import { CHeaderBrand as HeaderBrand } from "../coreui";
import HeaderLinks from "./header-links.component";
import { PermisoNames, CategoriaNames } from "../utils";

const Header: React.FunctionComponent = () => {
  const headerLogo = useStaticQuery<HeaderLogoImageQuery>(graphql`
    query HeaderLogoImage{
      file(relativePath: {eq: "logo-bg-white.png"}) {
        childImageSharp {
          resize(width:160 height:48 ){
            src
          }
        }
      }
    }
  `);

  const {
    data: { sidebarShow } = { sidebarShow: "responsive" },
  } = useGetSideBarShowQuery();

  const toggleSidebar = () => {
    const possibleValues: CSidebar["show"][] = [true, "responsive"];

    sidebarShowVar(possibleValues.includes(sidebarShow) ? false : "responsive");
  };

  const toggleSidebarMobile = () => {
    const possibleValues: CSidebar["show"][] = [false, "responsive"];

    sidebarShowVar(possibleValues.includes(sidebarShow) ? true : "responsive");
  };

  return (
    <CHeader withSubheader={false} fixed>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <HeaderBrand className="mx-auto d-lg-none" to="/app">
        <CImg
          src={headerLogo.file?.childImageSharp?.resize?.src ?? ""}
          alt="Logo"
        />
      </HeaderBrand>
      <HeaderLinks
        links={[
          {
            name: "Ordenes",
            to: "/app/ordenes",
            category: CategoriaNames.TIENDA,
            permisos: [PermisoNames.ORDENES_READ],
          },
          {
            name: "Usuarios",
            to: "/app/usuarios",
            category: CategoriaNames.ADMIN,
            permisos: [PermisoNames.USUARIOS_READ],
          },
          {
            name: "Tickets de Cambio",
            to: "/app/tickets-cambio",
            category: CategoriaNames.TIENDA,
            permisos: [PermisoNames.TICKET_CAMBIO_READ],
          },
        ]}
      />
      <CHeaderNav className="px-3">
        <TheHeaderDropdown />
      </CHeaderNav>
    </CHeader>
  );
};

export default Header;
