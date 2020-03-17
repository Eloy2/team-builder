import React, { useState } from 'react';
import styled from 'styled-components';


const Label = styled.label`
    @import url('https://fonts.googleapis.com/css?family=Baloo+Da+2&display=swap');
    font-family: 'Baloo Da 2', cursive;
`
const Button = styled.button`
    @import url('https://fonts.googleapis.com/css?family=Baloo+Da+2&display=swap');
    font-family: 'Baloo Da 2', cursive;
    border-radius: 15px;
    border: 2px solid white;
    padding: 5%;
    background-color: #282c34;
    color: white;
    font-size: 1.2rem;
    margin-top: 5%;
    margin-bottom: 5%;
    box-shadow: 1px 3px 1px 3px #1e0a2b;

    &:hover {
        background-color: white;
        color: #4c2f8f;
        border-color: #4c2f8f;
    }
`

const FormDiv = styled.form`
    border-radius: 15px;
    border: 2px solid white;
    background-color: #4c2f8f;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;
    margin-bottom: 3%;
`

const Form = props => {

    // STATE
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        role: ""
    });

    // CHANGE HANDLER
    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    // SUBMIT HANDLER
    const formSubmitHandler = e => {
        e.preventDefault();

        props.addMember({
            ...formState,
            id: Date.now()
        });

        setFormState({
            name: "",
            email: "",
            role: ""
        });
    }

    return (
        <FormDiv onSubmit={formSubmitHandler}>
            <h1>Sign Up Here</h1>
            <Label htmlFor="name">First Name:</Label>
            <br/>
            <input
            type="text"
            name="name"
            placeholder="First Name"
            value={formState.name}
            onChange={changeHandler}
            />
            <br/>

            <Label htmlFor="email">Email:</Label>
            <br/>
            <input
            type="text"
            name="email"
            placeholder="email"
            value={formState.email}
            onChange={changeHandler}
            />
            <br/>

            <Label htmlFor="role">Role:</Label>
            <br/>
            <select 
            name="role"
            value={formState.role}
            onChange={changeHandler}
            >
                <option/>
                <option>Backend Engineer</option>
                <option>Frontend Engineer</option>
                <option>Designer</option>
            </select>
            <br/>

            <Button type="submit">Add Member</Button>

        </FormDiv>
    );
}

export default Form;
