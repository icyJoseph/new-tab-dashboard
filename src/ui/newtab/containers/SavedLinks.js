import React, { useEffect, useState } from "react";
import List from "../components/List";
import Button from "../../common/Button";
import { openURL } from "../../../data/chrome-utils";
import { useUrls, useGetAll, useDelete } from "../../../hooks";
import openLink from "../../../assets/open-link.png";
import deleteLink from "../../../assets/delete-link.png";

const fixed = num => num.toFixed();

const toMinutes = timestamp => Math.floor(Date.now() - timestamp) / (60 * 1000);

const displayTimestamp = timestamp => {
  const minutes = fixed(toMinutes(timestamp));

  if (minutes > 3600) {
    const hours = fixed(minutes / 60);
    return `${hours} hours ago`;
  }

  return `${minutes} minutes ago`;
};

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
        <input
          className="input-field"
          value={query}
          onChange={handleChange}
          placeholder="Showing all"
        />
      </div>
      <List
        items={filtered}
        renderer={({ id, url, title, timestamp }) => (
          <div key={id} className="list-item">
            <div className="url-container">
              <p className="url-text">{title || url}</p>
            </div>
            <div>
              <Button type={openLink} callback={openURL(url)} />
              <Button type={deleteLink} callback={useDelete(id)} />
            </div>
            <div>
              <p className="url-timestamp">{displayTimestamp(timestamp)}</p>
            </div>
          </div>
        )}
      />
    </>
  );
}

export default SavedLinks;
