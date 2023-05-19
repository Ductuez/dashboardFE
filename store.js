import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./src/redux/reducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;


/* 

react-select
@fortawesome/react-fontawesome@0
*/