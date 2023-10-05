import { combineReducers, compose, createStore } from "redux";
import AppReducer from "./reducers/appReducer";

const appReducers = combineReducers({
    AppReducer,
})
const rootReducers = (state, action) => {
    return appReducers(state, action)
}

const store = createStore(rootReducers, {});

export default store;