import { TypePolicy } from "@apollo/client";
import { loadingBarStatusVar, newEventModalVar } from "./variables";

const localFields: TypePolicy["fields"] = {
  /**
   * Defining how to read each field from local store
   */
  loadingBarStatus() {
    return loadingBarStatusVar();
  },

  newEventModal() {
    return newEventModalVar();
  },
};

export default localFields;
