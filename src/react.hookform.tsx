import { Button } from "react-bootstrap";
import './form.css';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import addUserAction from "./actions/actionUser";


const ReactHookForm = (props: any) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate: any = useNavigate();
    const location: any = useLocation();

    //location is used to change the location functinally and it receives the data from other location.the data receiving attribute is {state}
    const formData: any = location.state;
    //receiving the data from the simpleform

    const dispatch: any = useDispatch();

    // console.log(location);

    const onSubmit = (data: any) => {
        dispatch(addUserAction(data));
        navigate('/user-list');
    }

    return (
        <div>
            <h2 className="heading">React Hook form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label>First Name</label>
                        <input type="text" className="form-control" placeholder="Enter first name" {...register("firstName", { required: "First name is required" })} />
                        {errors?.firstName && errors?.firstName?.type === 'required' && (
                            <div className="error">{errors?.firstName?.message?.toString()}</div>)}
                    </div>
                    <div className="col-md-4 mb-3">
                        <label>Last Name</label>
                        <input type="text" className="form-control" placeholder="Enter last name" {...register("lastName", { required: "Last name is required" })}></input>
                        {errors?.lastName && errors?.lastName?.type === 'required' && (
                            <div className="error">{errors?.lastName?.message?.toString()}</div>)}
                    </div>
                    <div className="col-md-4 mb-3">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" {...register("email", {
                            required: "email  is required",
                            pattern:
                                //here again in pattern we are taking another object.
                                { value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, message: "Invalid email" }

                        })}></input>
                        {errors?.email && (
                            <div className="error">{errors?.email?.message?.toString()}</div>)}
                    </div>
                    <div className="col-md-4 mb-3">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter Password"
                            {...register("password", {
                                required: "Password is required",
                                validate: {
                                    checkForMinLength: (value: string) => value.length >= 6,
                                    checkForMaxLength: (value: string) => value.length <= 15
                                }
                            })}></input>
                        {errors?.password && errors?.password?.type === "required" && (
                            <div className="error">{errors?.password?.message?.toString()}</div>)}

                        {errors?.password && errors?.password?.type === "checkForMinLength" && (
                            <div className="error">password must be greater than 6 letters</div>)}

                        {errors?.password && errors?.password?.type === "checkForMaxLength" && (
                            <div className="error">Password must be less than 15 letters</div>)}
                    </div>
                </div>
                <div className="form-row">
                    <Button type="submit">Register</Button>
                </div>
            </form >
        </div>
    )

}
export default ReactHookForm;