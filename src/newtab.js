import React from "react";
import ReactDOM from "react-dom";
import { Store } from "webext-redux";
import { Provider } from "context-hook-provider";

import Favorites from "./containers/Favorites";
import SavedLinks from "./containers/SavedLinks";
import Header from "./components/Header";
import "./newtab.css";
import "./common.css";

const store = new Store();

store.ready().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <div className="new-tab">
        <Header />
        <Favorites />
        <SavedLinks />
      </div>
    </Provider>,
    document.getElementById("root")
  );
});
