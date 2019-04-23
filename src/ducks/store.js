export const ADD_URL = "add -> url";
export const REMOVE_URL = "remove -> url";

const initialState = {
  urls: []
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_URL:
      return { ...state, urls: [...state.urls, action.payload] };
    case REMOVE_URL:
      return {
        ...state,
        urls: state.urls.filter(({ id }) => id !== action.payload)
      };
    default:
      return state;
  }
}

export default reducer;
