export interface Info{
    loginPlace : string,
    loginDate : string,
    loginTime : string,
}

const initialState : Info = {
    loginPlace : "",
    loginDate : "",
    loginTime : "",
}

const infoReducer = (state = initialState, action : any) =>{
 return state;
}

export default infoReducer