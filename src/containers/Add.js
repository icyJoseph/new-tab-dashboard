import React, { useState, useEffect } from "react";
import { State } from "context-hook-provider";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { useSave, useAlreadySaved } from "../customHooks";
import addLink from "../assets/add-link.png";
import check from "../assets/check.png";

export function Add() {
  const [ready, setReady] = useState(false);
  const [url, setURL] = useState([]);
  const save = useSave();
  const alreadySaved = useAlreadySaved(url);

  const callback = () => save({ id: url, url, timestamp: Date.now() });

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const [{ url }] = tabs;
      setURL(url);
    });
  }, []);

  if (alreadySaved) {
    return <Icon icon={check} />;
  }

  return url && <Button type={addLink} callback={callback} />;
}

export default Add;
