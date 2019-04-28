import React, { useReducer, useEffect } from "react";
import { State } from "context-hook-provider";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { useSave, useAlreadySaved } from "../customHooks";
import addLink from "../assets/add-link.png";
import check from "../assets/check.png";

const initialState = { ready: false };
const reducer = (state, nextState) => ({ ...state, ...nextState });

export function Add() {
  const [state, setState] = useReducer(reducer, initialState);
  const { url: current, ready } = state;
  const alreadySaved = useAlreadySaved(current);
  const save = useSave();

  const callback = () => save({ ...state, timestamp: Date.now() });

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      const [{ url, title }] = tabs;
      setState({ id: url, url, title, ready: true });
    });
  }, []);

  if (alreadySaved) {
    return <Icon icon={check} />;
  }
  return ready && <Button type={addLink} callback={callback} />;
}

export default Add;
