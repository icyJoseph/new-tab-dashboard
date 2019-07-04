import React from "react";

export function Button({ type, text, callback }) {
  if (type) {
    return (
      <div className="img-btn">
        <img src={type} alt={type} onClick={callback} />
      </div>
    );
  }
  return <button onClick={callback}>{text}</button>;
}

export default Button;
