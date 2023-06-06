import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export interface MultiNumber {
    multiNumber: number;
    callMe?: (data:any) => void;

}


function MultiTable(props: MultiNumber) {

    const [showTable, setShowTable] = useState(false);

    const dataforParenrt = {
        userName : "Monty",
        email : "webla@123",
        habits : ["coding","Learning"],
        address: {
            city:"bangalore",
            area:"Marathahalli",
            state:"karnataka"
        }
    }


    useEffect(() => {
        if (props.multiNumber > 0) {
            setShowTable(true);
        } else {
            setShowTable(false)
        }
    }, [props.multiNumber])

    // console.log(`the parent value is ${props.multiNumber}`)

    return (
        <>
            {showTable &&
               (Array.from({length: 10}, (e, i) => (<span key={i}>{`${i + 1} X ${props.multiNumber} = ${(i + 1) * props.multiNumber}`}</span>)))}
             
            {/* <button onClick={() =>props.callMe(dataforParenrt)}>Click me</button>*/}
            {/* <Button onClick={() =>props.callMe(dataforParenrt)} variant="primary">Click me</Button> */}
        </>
        )

}
export default MultiTable