import { useContext } from "react";
import { State } from "context-hook-provider";
import { ADD_URL } from "../ducks/store";

export function useUrls() {
  const { state } = useContext(State);
  return state.urls;
}

export function useAddUrl() {
  const { dispatch } = useContext(State);
  return payload => dispatch({ type: ADD_URL, payload });
}
