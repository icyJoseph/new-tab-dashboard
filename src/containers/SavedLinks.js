import React, { useEffect } from "react";
import List from "../components/List";
import Button from "../components/Button";
import { useUrls, useGetAll, useDelete } from "../customHooks";
import openLink from "../assets/open-link.png";
import deleteLink from "../assets/delete-link.png";

const openURL = newURL => () => chrome.tabs.create({ url: newURL });

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
            <div>
              <p>{url}</p>
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
