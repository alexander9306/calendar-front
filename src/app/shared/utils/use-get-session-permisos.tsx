import {
  useGetPermisosSessionQuery,
  Viewier_Permisos as ViewierPermisos,
} from "../../generated/api";

export default function useGetSessionPermisos(): ViewierPermisos {
  const { data } = useGetPermisosSessionQuery();
  return data?.permisosSession ?? { tienda: [], admin: [] };
}

export enum PermisoNames {
  USUARIOS_READ = "USUARIOS:READ",
  USUARIOS_WRITE = "USUARIOS:WRITE",
  USUARIOS_EDIT = "USUARIOS:EDIT",
  ORDENES_READ = "ORDENES:READ",
  TICKET_CAMBIO_READ = "TICKET_CAMBIO:READ",
  TICKET_CAMBIO_WRITE = "TICKET_CAMBIO:WRITE",
}

export enum CategoriaNames {
  TIENDA = "Tienda",
  ADMIN = "Admin",
}
