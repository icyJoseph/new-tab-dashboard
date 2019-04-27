import React, { useState, useEffect } from "react";
import { State } from "context-hook-provider";
import Button from "../components/Button";
import { useSave } from "../customHooks";

export function Add() {
  const [tabs, setTabs] = useState([]);
  const save = useSave();

  const callback = () => {
    const [{ url }] = tabs;
    return url && save({ id: url, url });
  };

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs =>
      setTabs(tabs)
    );
  }, []);

  return <Button text="save" callback={callback} />;
}

export default Add;
