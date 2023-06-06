
const initialState: any = [];

const productReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            state.push(action.payload);
            return state;
            break;
        default:
            return state;
            break;
    }
}

export default productReducer;