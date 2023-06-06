import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import infoReducer from "./infoReducer";
import countReducer from "./countReducer";
import productReducer from "./productReducer";


const rootReducer = combineReducers({
    user: UserReducer,
    count: countReducer,
    products : productReducer,
});

export default rootReducer;