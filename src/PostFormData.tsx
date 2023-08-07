import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';


export interface DefaultFormValues {
    name: string,
    email: string,
}

const defaultformvalues: DefaultFormValues = {
    name: 'manoj',
    email: 'manu',
}


const PostFormData = () => {
    const [FormData, SetFormData] = useState<DefaultFormValues>(defaultformvalues);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        SetFormData({ ...FormData, [name]: value })
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
    }

    useEffect(() => {
        if (FormData.name && FormData.email) {
            axios.post('https://example.com/api/submit', FormData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(response => { console.log(response.data) })

                .catch(error => {
                    console.log(error);
                })
        }
    },[FormData]);


    return (
        <form onSubmit={handleSubmit}>
            <div style={{ padding: "10px" }}>
                <label>Full Name</label> <br />
                <input type='text' name='name' value={FormData.name} onChange={handleChange} placeholder='Enter Name'></input>
            </div>

            <div style={{ padding: "10px" }}>
                <label>Email</label>  <br />
                <input type='email' name='email' value={FormData.email} placeholder='Enter Email'></input>
            </div>

            <Button type='submit'>Submit</Button>

        </form>
    )
}

export default PostFormData;
