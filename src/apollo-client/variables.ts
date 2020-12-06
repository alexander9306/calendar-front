import { makeVar } from "@apollo/client";
import type { CSidebar } from "@coreui/react";

export const sidebarShowVar = makeVar<CSidebar["show"]>("responsive");
export const isDarkThemeVar = makeVar(false);
export const loadingBarStatusVar = makeVar(0);
