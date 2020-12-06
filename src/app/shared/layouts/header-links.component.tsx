import React from "react";
import { Link } from "gatsby";
import { CHeaderNav, CHeaderNavItem } from "@coreui/react";
import { useGetSessionPermisos, CategoriaNames } from "../utils";

interface LinkOptions {
  to: string;
  name: string;
  category: string;
  permisos: string[];
}

interface LinkProps {
  links: LinkOptions[];
}

const HeaderLinks: React.FunctionComponent<LinkProps> = ({ links }) => {
  const userPermisos = useGetSessionPermisos();

  const Headers: React.FunctionComponent<LinkOptions> = ({
    to,
    name,
    category,
    permisos,
  }) => {
    if (
      (category === CategoriaNames.ADMIN &&
        permisos.some((permiso) => userPermisos.admin.includes(permiso))) ||
      (category === CategoriaNames.TIENDA &&
        permisos.some((permiso) => userPermisos.tienda.includes(permiso)))
    )
      return (
        <CHeaderNavItem className="px-3">
          <Link to={to} className="c-header-nav-link">
            {name}
          </Link>
        </CHeaderNavItem>
      );

    return null;
  };

  return (
    <CHeaderNav className="d-md-down-none mr-auto">
      {links.map((link) => (
        <Headers
          key={link.name}
          to={link.to}
          name={link.name}
          category={link.category}
          permisos={link.permisos}
        />
      ))}
    </CHeaderNav>
  );
};

export default HeaderLinks;
