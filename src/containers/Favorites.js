import React from "react";
import { openURL } from "../chrome-utils";
import github from "../assets/github.png";
import gmail from "../assets/gmail.png";
import homepage from "../assets/homepage.png";
import bus from "../assets/bus.png";

const favorites = [
  { id: "github", url: "https://github.com/icyJoseph", icon: github },
  { id: "gmail", url: "https://gmail.com", icon: gmail },
  { id: "homepage", url: "https://icyjoseph.github.io/", icon: homepage },
  { id: "bus", url: "https://wiry-coal.surge.sh/", icon: bus }
];

export function Favorites({ favorites }) {
  return (
    <>
      <div>
        <h3 className="sub-header">Favorites</h3>
      </div>
      <div className="favorites-container">
        {favorites.map(({ id, url, icon }) => (
          <div key={id} className="favorites-item">
            <img src={icon} alt={icon} onClick={openURL(url)} />
          </div>
        ))}
      </div>
    </>
  );
}

function withFavorites({ favorites }) {
  return function FavoritesInjected(C) {
    return props => <C favorites={favorites} {...props} />;
  };
}

export default withFavorites({ favorites })(Favorites);
