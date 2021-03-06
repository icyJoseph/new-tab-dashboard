import { createStore, applyMiddleware } from "redux";
import { wrapStore } from "webext-redux";
import reducer, {
  GET_ALL,
  LOAD_ALL,
  SAVE,
  DELETE,
  STORE_CHANGE
} from "./redux-store";

import { storeURLs, getURLs, addURLsChangeListener } from "./data/chrome-utils";

const middleware = store => next => {
  // TODO: move out
  const changeListener = ({ urls: { newValue } }) => {
    // when a change is detected, dispatch that to the store
    store.dispatch({ type: STORE_CHANGE, payload: newValue });
  };
  // attach the listener
  addURLsChangeListener(changeListener);

  // TODO: use switch case
  return action => {
    // on Init get saved
    if (action.type === GET_ALL) {
      getURLs(urls => store.dispatch({ type: LOAD_ALL, payload: urls }));
    }
    // when saving an new url
    if (action.type === SAVE) {
      const { urls = [] } = store.getState();
      const { id, url } = action.payload;
      const exists = urls.find(url => url.id === id);

      if (!exists) {
        storeURLs([action.payload, ...urls]);
      }
    }

    if (action.type === DELETE) {
      const { urls } = store.getState();
      storeURLs(urls.filter(url => url.id !== action.payload));
    }

    return next(action);
  };
};

// to get the initial state, summon the URLS
chrome.storage.local.get(["urls"], ({ urls }) => {
  console.debug("Loaded initial state", JSON.stringify(urls));
  const reduxStore = createStore(
    reducer,
    { urls },
    applyMiddleware(middleware)
  );
  wrapStore(reduxStore);
});
