import React from "react";
import ReactDOM from "react-dom";
import { Store } from "webext-redux";
import { Provider } from "context-hook-provider";

import Add from "./containers/Add";
import "./popup.css";
import "./common.css";

const store = new Store();

store.ready().then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <div className="pop-up">
        <div>
          <h4 className="pop-up-header">Save?</h4>
        </div>
        <Add />
      </div>
    </Provider>,
    document.getElementById("root")
  );
});
