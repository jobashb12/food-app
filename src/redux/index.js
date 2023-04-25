import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
    productReducer,
});

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
