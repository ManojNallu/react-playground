import { UserData } from "../reducers/UserReducer";


export const userDeleteAction = (userData: UserData) => {

    return {
        type: "DELETE_USER",
        payload: userData,
    }
}

export default userDeleteAction;