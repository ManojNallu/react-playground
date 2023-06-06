import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UserData } from './UserReducer';
import { Table } from 'react-bootstrap';
import userDeleteAction from '../actions/userDeleteAction';
import { BsTrash } from "react-icons/bs"
import axios from 'axios';

const UserList = (props: any) => {

    const userlists: UserData[] = useSelector((state: any) => state.user)
    console.log(userlists);

    const dispatch = useDispatch();

    const handleDeleteUser = (userData: UserData) => {
        dispatch(userDeleteAction(userData));
    };


    const fetchProducts = () => {
        axios.get('https://dummyjson.com/products').then((response: any) => {
            console.log(response);
        }).catch((error: any) => {
            console.log(error)
        })
    }

    fetchProducts();

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr >
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userlists.map((user: any) => {
                        return (
                            <tr key={user.email}>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td><button style={{ border: '0' }} onClick={() => handleDeleteUser(user)}> <BsTrash /> </button></td>
                            </tr>
                        );

                    })}

                </tbody>
            </Table>
        </div>
    )
}
export default UserList;



