import React from "react";

export function List({ items = [], renderer }) {
  return <ul>{items.map(renderer)}</ul>;
}

export default List;
