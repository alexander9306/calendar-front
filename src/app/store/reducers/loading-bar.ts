export interface LoadingBarState {
  progress: number;
}

export interface LoadingBarDispatch extends Partial<LoadingBarState> {
  type: "SET_PROGRESS" | null;
}

type Reducer = (
  state: LoadingBarState,
  rest: LoadingBarDispatch
) => LoadingBarState;

const initialState: LoadingBarState = {
  progress: 0,
};

export const loadingBarReducer: Reducer = (
  state = initialState,
  { type, ...rest }
) => {
  return type === "SET_PROGRESS" ? { ...state, ...rest } : state;
};
