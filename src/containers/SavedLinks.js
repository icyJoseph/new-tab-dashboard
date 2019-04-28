import React, { useEffect } from "react";
import List from "../components/List";
import Button from "../components/Button";
import { useUrls, useGetAll, useDelete } from "../customHooks";
import { openURL } from "../chrome-utils";
import openLink from "../assets/open-link.png";
import deleteLink from "../assets/delete-link.png";

export function SavedLinks() {
  const urls = useUrls();
  const getSaved = useGetAll();

  useEffect(() => {
    getSaved();
  }, []);

  return (
    <>
      <div>
        <h3 className="sub-header">Saved Links</h3>
      </div>
      <List
        items={urls}
        renderer={({ id, url }) => (
          <div key={id} className="list-item">
            <div className="url-container">
              <p className="url-text">{url}</p>
            </div>
            <div>
              <Button type={openLink} callback={openURL(url)} />
              <Button type={deleteLink} callback={useDelete(id)} />
            </div>
          </div>
        )}
      />
    </>
  );
}

export default SavedLinks;
