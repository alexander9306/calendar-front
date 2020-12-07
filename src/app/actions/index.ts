import type { ReduxDistpatch, ReduxState } from "../store";

export function setLoadingBarAction(value: number): ReduxDistpatch {
  return {
    type: "SET_PROGRESS",
    progress: value,
  };
}

export function setSidebarAction(
  show: ReduxState["data"]["sidebarShow"]
): ReduxDistpatch {
  return {
    type: "SET_APP_STATE",
    sidebarShow: show,
  };
}
