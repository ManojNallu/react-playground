import ChildComponent from "./Monti";
import MyContext from "./context";


const CheckContextFunction = () => {

    const contextvalue = {
        name: "manoj",
        age: "24"
    };

    return (

       <MyContext.Provider value={contextvalue}>
        <ChildComponent />
        <p>Hi I have added this lines in master</p>
       </MyContext.Provider>
       
    );

}

export default CheckContextFunction;