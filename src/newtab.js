import React from "react";
import ReactDOM from "react-dom";
import { Store } from "webext-redux";
import { Provider } from "context-hook-provider";

import SavedLinks from "./containers/SavedLinks";
import "./newtab.css";

const store = new Store();

store.ready().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <div>New Tab</div>
      <SavedLinks />
    </Provider>,
    document.getElementById("root")
  );
});
