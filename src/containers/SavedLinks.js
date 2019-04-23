import React, { useContext } from "react";
import List from "../components/List";
import { State } from "context-hook-provider";

export function SavedLinks() {
  const {
    state: { urls }
  } = useContext(State);
  return (
    <List items={urls} renderer={({ id, url }) => <li key={id}>{url}</li>} />
  );
}

export default SavedLinks;
