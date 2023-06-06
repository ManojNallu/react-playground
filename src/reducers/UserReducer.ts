import React from 'react'

export interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}



const initialState: UserData[] = [];


const UserReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD_USER":
            state.push(action.payload);
            return state;
            break;
        case "DELETE_USER":
            const updatedState = state.filter(
                (user: UserData) => user.email !== action.payload.email
              ); // Filter out the user to be deleted
              return updatedState;
            break;
        default:
            return state;
            break;
    }


}

export default UserReducer;
