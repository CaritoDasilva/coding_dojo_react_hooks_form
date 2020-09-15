import React, { useState } from 'react'
import './login.css'
const Form = () => {
    const [person, setPerson] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPass: ''
    })
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [errorMsg, setErrorMsg] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPass: ''
    })
    const [isError, setIsError] = useState(false)
    const handleChange = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value });
        handlePassword()
        console.log(person)
        // e.target.value.length < 3 ? setErrorMsg({ ...errorMsg, [e.target.name]: `${e.target.name} must be 3 characters or longer` }) : setErrorMsg({ ...errorMsg, [e.target.name]: '' });
    }

    const handleName = (e) => {
        if (e.target.value.length < 2) {
            setErrorMsg({ ...errorMsg, [e.target.name]: `${e.target.name} must be 2 characters or longer` })
        } else {
            setErrorMsg({ ...errorMsg, [e.target.name]: '' })
        }
    }

    const emailHandle = (e) => {
        e.target.value.length < 5 ? setErrorMsg({ ...errorMsg, [e.target.name]: `${e.target.name} must be 2 characters or longer` }) :
            setErrorMsg({ ...errorMsg, [e.target.name]: '' })
    }

    const handlePassword = (e) => {
        person.password === person.confirmPass ? setErrorMsg({ ...errorMsg, password: '', confirmPass: '' }) :
            setErrorMsg({ ...errorMsg, password: 'Both fields have to match', confirmPass: 'Both fields have to match' });
    }

    const createUser = (e) => {
        e.preventDefault();
        for (let key in errorMsg) {
            console.log("createUser -> value", errorMsg[key]);
            errorMsg[key].length > 1 && setIsError(true);
        };
        isError ? setHasBeenSubmitted(true) : setHasBeenSubmitted(false);

    }



    return (
        <div>
            <div className="container">
                {
                    hasBeenSubmitted ?
                        <h3>"Thank you for submitting the form!"</h3> :
                        <h3>Welcome, please submit the form</h3>
                }

                <div className="col-md-6 offset-md-3" >
                    <div className="card">
                        <form action="" onSubmit={createUser}>
                            <div className="input-group mb-3">
                                <input name="firstName" onChange={(e) => { handleChange(e); handleName(e) }} type="text" className="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1" />
                                <div className="invalid-feedback">
                                    {errorMsg.firstName}
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input name="lastName" onChange={(e) => { handleChange(e); handleName(e) }} type="text" className="form-control" placeholder="Last Name" aria-label="Username" aria-describedby="basic-addon1" />
                                <div className="invalid-feedback">
                                    {errorMsg.lastName}
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input name="email" onChange={(e) => { handleChange(e); emailHandle(e) }} type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                                <div className="invalid-feedback">
                                    {errorMsg.email}
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input name="password" type="password" onChange={(e) => { handleChange(e); handlePassword(e) }} className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                                <div className="invalid-feedback">
                                    {errorMsg.password}
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input name="confirmPass" type="password" onChange={(e) => { handlePassword(e) }} className="form-control" placeholder="Confirm Password" aria-label="Username" aria-describedby="basic-addon1" />
                                <div className="invalid-feedback">
                                    {errorMsg.confirmPass}
                                </div>
                            </div>
                            <button type="submit" className="btn btn-info">Create user!</button>

                        </form>
                    </div>
                    {hasBeenSubmitted && (
                        <h1>Welcome {person.firstName}</h1>
                    )}

                </div>
            </div>
        </div>
    )
};

export default Form;