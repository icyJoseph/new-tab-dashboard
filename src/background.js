import { createStore, applyMiddleware } from "redux";
import { wrapStore } from "webext-redux";
import reducer, {
  GET_ALL,
  LOAD_ALL,
  SAVE,
  DELETE,
  STORE_CHANGE
} from "./ducks/store";

const NEW_TAB = "chrome://newtab/";

// TODO: move to API folder
const storeURLs = urls => chrome.storage.local.set({ urls });

const getURLs = callback =>
  chrome.storage.local.get(["urls"], ({ urls }) => callback(urls));

const addURLsChangeListener = listener =>
  chrome.storage.onChanged.addListener(listener);

const URLs = store => next => {
  // TODO: move out
  const changeListener = ({ urls: { newValue } }) => {
    // when a change is detected, dispatch that to the store
    store.dispatch({ type: STORE_CHANGE, payload: newValue });
  };
  // attack the listener
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
      const isNewTab = url === NEW_TAB;
      if (exists) {
        // dispatch already saved
      }
      if (newTab) {
        // dispatch won't save new tab
      }

      if (!exists && !isNewTab) {
        storeURLs([...urls, action.payload]);
      }
    }

    if (action.type === DELETE) {
      const { urls } = store.getState();
      storeURLs(urls.filter(url => url.id !== action.payload));
    }

    return next(action);
  };
};

const reduxStore = createStore(reducer, undefined, applyMiddleware(URLs));

wrapStore(reduxStore);
