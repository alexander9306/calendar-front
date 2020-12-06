import { TypePolicy } from "@apollo/client";
import {
  sidebarShowVar,
  isDarkThemeVar,
  loadingBarStatusVar,
} from "./variables";
import type { Viewier_Permisos as ViewierPermisos } from "../app/generated/api";

const localFields: TypePolicy["fields"] = {
  /**
   * Defining how to read each field from local store
   */
  isLoggedIn() {
    return typeof localStorage !== "undefined"
      ? !!localStorage.getItem("token")
      : false;
  },
  loadingBarStatus() {
    return loadingBarStatusVar();
  },
  isDarkTheme() {
    return isDarkThemeVar();
  },
  sidebarShow() {
    return sidebarShowVar();
  },
  permisosSession() {
    const pTienda =
      typeof localStorage !== "undefined"
        ? localStorage.getItem("permisos_tienda")
        : undefined;
    const pAdmin =
      typeof localStorage !== "undefined"
        ? localStorage.getItem("permisos_admin")
        : undefined;
    return {
      tienda: pTienda?.split(",") ?? [],
      admin: pAdmin?.split(",") ?? [],
    } as ViewierPermisos;
  },
};

export default localFields;
