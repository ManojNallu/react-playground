import React from "react";

export interface SampleInterface {
    name?: string;
    age?: number;
    address?: string;
    dob?: string
}

function Sample(props: SampleInterface) {
    return (
        <React.Fragment>
            <div >
                <div>This is Sample Component</div>
                <div>This is my Functional Component</div>
                <h3>My Details</h3>
                <div>
                    <span>Hello I am <b>{props.name}</b></span>
                    <br />
                    <span>I am <b>{props.age}</b> years old</span>
                    <br />
                    <span>I am from <b>{props.address}</b> </span>
                    <br />
                    <span>My Date of Birth is <b>{props.dob}</b></span>
                </div>
            </div>

        </React.Fragment>

    );
}

export default Sample;