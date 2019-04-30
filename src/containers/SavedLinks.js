import React, { useEffect, useState } from "react";
import List from "../components/List";
import Button from "../components/Button";
import { useUrls, useGetAll, useDelete } from "../customHooks";
import { openURL } from "../chrome-utils";
import openLink from "../assets/open-link.png";
import deleteLink from "../assets/delete-link.png";

export function SavedLinks() {
  const urls = useUrls();
  const getSaved = useGetAll();

  const [query, setQuery] = useState("");

  useEffect(() => {
    getSaved();
  }, []);

  const handleChange = e => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const filtered = urls.filter(url =>
    url.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div>
        <h3 className="sub-header">Saved Links</h3>
      </div>
      <div className="input-field-container">
        <input className="input-field" value={query} onChange={handleChange} />
      </div>
      <List
        items={filtered}
        renderer={({ id, url, title }) => (
          <div key={id} className="list-item">
            <div className="url-container">
              <p className="url-text">{title || url}</p>
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
