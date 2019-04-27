export const DELETE = "remove url";
export const SAVE = "save url";
export const GET_ALL = "get all";
export const LOAD_ALL = "load all";
export const STORE_CHANGE = "store change";

const initialState = {
  urls: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ALL:
    case STORE_CHANGE:
      return { ...state, urls: action.payload };
    default:
      return state;
  }
}

export default reducer;
