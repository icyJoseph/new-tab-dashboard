import { createStore } from "redux";
import { wrapStore } from "webext-redux";
import reducer from "./ducks/store";

const reduxStore = createStore(reducer);

wrapStore(reduxStore);
