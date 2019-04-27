import React, { useEffect } from "react";
import List from "../components/List";
import { useUrls, useGetAll, useDelete } from "../customHooks";

export function SavedLinks() {
  const urls = useUrls();
  const getSaved = useGetAll();

  useEffect(() => {
    getSaved();
  }, []);

  return (
    <>
      <List
        items={urls}
        renderer={({ id, url }) => (
          <li key={id} onClick={useDelete(id)}>
            {url}
          </li>
        )}
      />
    </>
  );
}

export default SavedLinks;
