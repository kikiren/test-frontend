import { createStore, combineReducers } from "redux";

function filterReducer(state = "", action) {
  switch (action.type) {
    case "SEARCH":
      return action.payload;
    default:
      return state;
  }
}

function loadMoreReducers(state = false, action) {
  switch (action.type) {
    case "LOAD_MORE":
      return action.payload;
    default:
      return state;
  }
}

function errorReducers(state = "", action) {
  switch (action.type) {
    case "SET_ERROR":
      return action.payload;
    default:
      return state;
  }
}

const reducers = combineReducers({
  filter: filterReducer,
  loadMore: loadMoreReducers,
  error: errorReducers,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
