import type { CSidebar } from "@coreui/react";

export interface AppState {
  sidebarShow: CSidebar["show"];
  isDarkTheme: boolean;
}

export interface AppDispatch extends Partial<AppState> {
  type: "SET_APP_STATE" | null;
}

const initialState: AppState = {
  sidebarShow: "responsive",
  isDarkTheme: false,
};

export function appReducer(
  state = initialState,
  { type, ...rest }: AppDispatch
): AppState {
  return type === "SET_APP_STATE" ? { ...state, ...rest } : state;
}
