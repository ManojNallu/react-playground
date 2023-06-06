import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import './form.css';
import { useNavigate } from "react-router-dom";

const SimpleForm = (props: any) => {
    //useNavigate hook is used to change the location functionally
    const navigate: any = useNavigate();
    

    //assigning the initial value to the input fields..
    const [formInputs, setFormInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [validations, setValidations] = useState({
        firstNameError: "",
        lastNameError: "",
        emailError: "",
        passwordError: "",
    });

    const [count, setCount] = useState(0);


    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormInputs({ ...formInputs, [name]: value });
        setCount(count + 1);
    }

    useEffect(() => {
        if (count > 0) {
            validateForm();
        }
    }, [count]);

    const validateForm = () => {
        let errors: any = {
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            passwordError: "",
        }

        const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

        if (!formInputs.firstName.trim()) {
            errors.firstNameError = "First name is Required..."
        } else {
            errors.firstNameError = "";
        }

        if (!formInputs.lastName.trim()) {
            errors.lastNameError = "Last name is Required..."
        } else {
            errors.lastNameError = "";
        }

        if (!formInputs.email.trim()) {
            errors.emailError = "Email is Required..."
        } else if (!emailPattern.test(formInputs.email)) {
            errors.emailError = "Invalid Email.."
        } else {
            errors.emailError = "";
        }

        if (!formInputs.password.trim()) {
            errors.passwordError = "Password is Required..."
        } else {
            errors.passwordError = "";
        }
        setValidations(errors);
    }

    const handleSubmit = () => {
        validateForm();
        navigate('/react.hookform', {state:formInputs});
        //this navigatehook  is used to change the location functinally,here we have given the path {recat.hookform }so it will navigate to that page
        //when we submit the form. along with the  path we have provide some form input data{ state:formInputs}why state means it accepts the data in
        //the name of attribute called state. so now when we hit enter the page navigate to {reacthook form} along with the data provided in the 
        //{simple form} and it will populate in the {reacthook form} automatically.
    }

    return (
        <>
            <h2 className="heading">Student LogIn Form</h2>
            <form>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label>First Name</label>
                        <input type="text" className="form-control" name="firstName" placeholder="Enter first name" value={formInputs.firstName} onChange={event => handleChange(event)}></input>
                        <div className="error">{validations.firstNameError}</div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label>Last Name</label>
                        <input type="text" className="form-control" name="lastName" placeholder="Enter last name" value={formInputs.lastName} onChange={event => handleChange(event)}></input>
                        <div className="error">{validations.lastNameError}</div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label>Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Enter email" value={formInputs.email} onChange={event => handleChange(event)}></input>
                        <div className="error">{validations.emailError}</div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label>Password</label>
                        <input type="password" className="form-control" name="password" placeholder="Enter Password" value={formInputs.password} onChange={event => handleChange(event)}></input>
                        <div className="error">{validations.passwordError}</div>
                    </div>
                </div>
                <div className="form-row">
                    <Button onClick={() => handleSubmit()}>Register</Button>
                </div>
            </form>
        </>
    );
}

export default SimpleForm;