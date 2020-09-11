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

    const handleChange = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value })
        console.log("handleChange -> e", person)

    }

    return (
        <div>
            <div className="container">
                <h1>Form HookS</h1>
                <div className="col-md-6 offset-md-3" >
                    <div className="card">
                        <form action="">
                            <div class="input-group mb-3">
                                <input name="firstName" onChange={(e) => handleChange(e)} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input name="lastName" onChange={(e) => handleChange(e)} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input name="email" onChange={(e) => handleChange(e)} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <input name="password" type="password" onChange={(e) => handleChange(e)} class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                            </div>
                        </form>
                    </div>
                    <h4>{person.firstName}</h4>
                    <h4>{person.lastName}</h4>
                    <h4>{person.email}</h4>
                    <h4>{person.password}</h4>
                </div>
            </div>
        </div>
    )
};

export default Form;