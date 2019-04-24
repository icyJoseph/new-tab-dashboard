import React, { useState, useEffect } from "react";
import { State } from "context-hook-provider";
import Button from "../components/Button";
import { useAddUrl } from "../customHooks";

export function Add() {
  const [tabs, setTabs] = useState([]);
  const adder = useAddUrl();

  const add = () => {
    const [{ url }] = tabs;
    return url && adder({ id: url, url });
  };

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      console.log(tabs);
      return setTabs(tabs);
    });
  }, []);

  return <Button text="add" callback={add} />;
}

export default Add;
