import React from "react";

export function List({ items = [], renderer }) {
  return <div className="list-container">{items.map(renderer)}</div>;
}

export default List;
