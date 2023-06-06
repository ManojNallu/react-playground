import React from 'react'

const countReducer = (state = 0, action: any) => {

    switch (action.type) {

        case "INC_COUNTER":
            return state + 1;
            break;
        case "DEC_COUNTER":
            return state - 1;
            break;
        default:
            return state;
            break;
    }
}

export default countReducer;