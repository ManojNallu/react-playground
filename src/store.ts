import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import * as thunkMiddleWare from "redux-thunk";


const appstore = createStore(rootReducer, applyMiddleware(thunkMiddleWare.default));


// console.log(appstore.getState());

export default appstore;

