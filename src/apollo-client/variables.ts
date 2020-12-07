import { makeVar } from "@apollo/client";
import type { EventModal } from "../app/generated/api";

export const loadingBarStatusVar = makeVar(0);
export const newEventModalVar = makeVar<EventModal>({
  show: false,
  selectInfo: undefined,
});
