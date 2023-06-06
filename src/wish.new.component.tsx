import { useEffect, useState } from "react";
import { WishProps } from "./wish.types";

// export interface WishProps {
//     userName: string;
//     callParent: () => void;
// }

// export interface WishState {
//     wishMessage: string
//     wishMessageTxt: string
// }


function NewWishComponent(props: WishProps) {

    const [wishMessage, setwishMessage] = useState("Good Morning");
    const [wishText, setwishText] = useState("");

    useEffect(() => {
        setTimeout(() => {
            setwishMessage("Good Evening");
        }, 5000);
    }, []);

    useEffect(() => {
        setwishText(`hi ${wishMessage}  ${props.userName}`);
    }, [wishMessage, props.userName]);

    const [list, setList] = useState(["Manoj", "siri", "Monty", "Manu"]);

    const btnClick = () => {
        props.callParent();
    }

    return (
        <div>{wishText}
            <div>
                {wishMessage === "Good Morning" ? (<span>Boolean Check true</span>) : (<span>Boolean Check False</span>)}
                {list.map((user) => (
                    <div>{user}</div>
                ))}
            </div>
            <button onClick={() => btnClick()}> Clickme </button>
            
        </div>
    )
}

export default NewWishComponent;