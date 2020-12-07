import type { CSidebar } from "@coreui/react";

export interface AppState {
  sidebarShow: CSidebar["show"];
}

export interface AppDispatch extends Partial<AppState> {
  type: "SET_APP_STATE" | null;
}

const initialState: AppState = {
  sidebarShow: "responsive",
};

export function appReducer(
  state = initialState,
  { type, ...rest }: AppDispatch
): AppState {
  return type === "SET_APP_STATE" ? { ...state, ...rest } : state;
}
