import React from "react";
import { Link } from "gatsby";
import { IconType } from "react-icons";
import { CategoriaNames } from "../utils";
import { Viewier_Permisos as ViewierPermisos } from "../../generated/api";

interface ListProps {
  to?: string;
  name: string;
  icon: IconType;
  permisos?: string[];
  category?: string;
  isNew?: boolean;
}
export default function getListItem(
  userPermisos: ViewierPermisos
): typeof ListItems {
  const ListItems: React.FunctionComponent<ListProps> = ({
    to = "",
    name,
    icon: Icon,
    isNew,
    permisos,
    category,
  }) => {
    if (permisos) {
      if (
        category === CategoriaNames.TIENDA &&
        !permisos.some((permiso) => userPermisos.tienda.includes(permiso))
      )
        return null;
      if (
        category === CategoriaNames.ADMIN &&
        !permisos.some((permiso) => userPermisos.admin.includes(permiso))
      )
        return null;
    }
    return (
      <li className="c-sidebar-nav-item">
        <Link
          activeClassName="c-active"
          className="c-sidebar-nav-link"
          to={`/app/${to}`}
        >
          <Icon className="c-sidebar-nav-icon" />
          {name}
          {isNew && <span className="badge badge-info">NEW</span>}
        </Link>
      </li>
    );
  };
  return ListItems;
}
