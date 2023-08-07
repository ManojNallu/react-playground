
const initialState : any = [];

const productReducer = (state = initialState, action: any) => {

   
   
    switch (action.type) {
        case 'GET_PRODUCTS' :
           return {...state, ...[action.payload]};
        default:
            return state;
    }
}

export default productReducer;