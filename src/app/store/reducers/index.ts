import { combineReducers } from "redux";
import { appReducer, AppState, AppDispatch } from "./app-state";
import {
  loadingBarReducer,
  LoadingBarState,
  LoadingBarDispatch,
} from "./loading-bar";

export default combineReducers({
  loadingBar: loadingBarReducer,
  data: appReducer,
});

export interface CombinedState {
  loadingBar: LoadingBarState;
  data: AppState;
}

export type ReduxDistpatch = AppDispatch | LoadingBarDispatch;
