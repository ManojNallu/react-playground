import { UserData } from "../reducers/UserReducer";


const addUserAction = (userData: UserData) => {

    return {
        type: "ADD_USER",
        payload: userData,
    }
}

export default addUserAction;

