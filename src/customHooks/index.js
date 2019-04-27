import { useContext } from "react";
import { State } from "context-hook-provider";
import { SAVE, GET_ALL, DELETE } from "../ducks/store";

// TODO: Migrate to react-redux 7

// Selectors
export function useUrls() {
  const { state } = useContext(State);
  return state.urls;
}

// Actions
export function useSave() {
  const { dispatch } = useContext(State);
  return payload => dispatch({ type: SAVE, payload });
}

export function useGetAll() {
  const { dispatch } = useContext(State);
  return () => dispatch({ type: GET_ALL });
}

export function useDelete(payload) {
  const { dispatch } = useContext(State);
  return () => dispatch({ type: DELETE, payload });
}
