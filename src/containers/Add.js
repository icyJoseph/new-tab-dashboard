import React, { useState, useEffect } from "react";
import { State } from "context-hook-provider";
import Button from "../components/Button";
import { useSave } from "../customHooks";
import addLink from "../assets/add-link.png";

export function Add() {
  const [ready, setReady] = useState(false);
  const [url, setURL] = useState([]);
  const save = useSave();

  const callback = () => save({ id: url, url, timestamp: Date.now() });

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const [{ url }] = tabs;
      setURL(url);
    });
  }, []);

  return url && <Button type={addLink} callback={callback} />;
}

export default Add;
