import React, { useContext } from "react";
import { State } from "context-hook-provider";

import Button from "../components/Button";
import { ADD_URL } from "../ducks/store";
export function Add() {
  const { dispatch } = useContext(State);
  return (
    <Button
      text="add"
      callback={() =>
        dispatch({ type: ADD_URL, payload: { id: Date.now(), url: "test" } })
      }
    />
  );
}

export default Add;
