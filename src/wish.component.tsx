import React from "react"
import { WishProps, WishState } from "./wish.types";



export class WishComponent extends React.Component<WishProps, WishState> {
    constructor(props: WishProps) {
        console.log("In Component Constructor");
        super(props);
        this.state = {
            wishMessage: "Good Morning",
            wishMessageTxt : ""
        }
    }

    static getDerivedStateFromProps(props: WishProps, state: WishState) {
        console.log("In Component getDerivedStateFromProps");
        return { wishMessageTxt: `Hi, ${state.wishMessage} ${props.userName}` }
    }

    shouldComponentUpdate(nextProps: Readonly<WishProps>, nextState: Readonly<WishState>, nextContext: any): boolean {
        console.log("in shouldComponentUpdate");
        return true;
    }

    componentDidUpdate(prevProps: Readonly<WishProps>, prevState: Readonly<WishState>, snapshot?: any): void {
        console.log("in component did Upadte");
    }


    componentDidMount(): void {
        console.log("In Component did mount");

        setTimeout(() =>{
            this.setState({wishMessage : "Good Evening"});
        },5000);
    }

    render(): React.ReactNode {
        console.log("In Component render");
        return (
            <div>{this.state.wishMessageTxt}</div>

        )
    }

}


