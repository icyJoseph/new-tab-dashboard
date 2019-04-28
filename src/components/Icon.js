import React from "react";

export function Icon({ icon }) {
  return (
    <div className="icon">
      <img src={icon} alt={icon} />
    </div>
  );
}

export default Icon;
