// import { useApolloClient } from "@apollo/client";
import { navigate } from "gatsby";
import client from "../../apollo-client/client";
import { Viewier } from "../generated/api";

interface LoginInput {
  /**
   * @param  tokenType the type of the token
   */
  tokenType: string;
  /**
   * @param  token the token
   */
  token: string;
  /**
   * @param  permisos the array of permisos of the current user
   */
  permisos: Viewier["permisos"];
}

/**
 * Set the login state to true
 * @param input An object with the required values
 */
export async function login({
  tokenType,
  token,
  permisos,
}: LoginInput): Promise<void> {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("token", `${tokenType ?? ""} ${token ?? ""}`);
    localStorage.setItem("permisos_tienda", permisos.tienda.join());
    localStorage.setItem("permisos_admin", permisos.admin.join());
    await client.resetStore();
  }
}

/**
 * Set the login state to false
 */
export async function logout(): Promise<void> {
  if (typeof localStorage !== "undefined") {
    localStorage.removeItem("token");
    localStorage.removeItem("permisos_tienda");
    localStorage.removeItem("permisos_admin");
    await client.clearStore();
    await navigate("/login");
  }
}
