import React from "react";

export function Button({ text, callback }) {
  return <button onClick={callback}>{text}</button>;
}

export default Button;
