import { useContext } from "react";
import MyContext from "./context";

const ChildComponent = () => {

    const contextvalue = useContext(MyContext);

    return (
        <div>
            {contextvalue.name}
            {contextvalue.age}
            
        </div>
    );

}

export default ChildComponent;