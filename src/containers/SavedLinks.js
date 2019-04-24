import React from "react";
import List from "../components/List";
import { useUrls } from "../customHooks";

export function SavedLinks() {
  const urls = useUrls();
  return (
    <List items={urls} renderer={({ id, url }) => <li key={id}>{url}</li>} />
  );
}

export default SavedLinks;
