import React from "react";
import ReactDOM from "react-dom";
import { Store } from "webext-redux";
import { Provider } from "context-hook-provider";

import Add from "./containers/Add";
import "./popup.css";

const store = new Store();

store.ready().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <div>PopUp</div>
      <Add />
    </Provider>,
    document.getElementById("root")
  );
});
