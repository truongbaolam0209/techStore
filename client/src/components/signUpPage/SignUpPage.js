import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import axios from 'axios';




const SignUp = props => {

    const [info, setInfo] = useState({
        fUsername: '',
        fEmail: '',
        fPassword: '',
        fConfirmPassword: ''
    });

    
    

    function submitForm(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/users/add', info)
            .then(res => console.log(res.data));
    };

    function handleChange(e) {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        axios.get('http://localhost:5000/users/')
            .then(res => console.log(res.data));
    }, [info]);


    return (
        <FormBox>
            {/* <form action="/action_page.php" onSubmit={submitForm}> */}
            <form onSubmit={submitForm}>
                <label>Username:</label><br />
                <input type="text" name="fUsername" onChange={handleChange} />
                <br />
                <label>Email:</label><br />
                <input type="text" name="fEmail" onChange={handleChange} />
                <br />
                <label>Password:</label><br />
                <input type="text" name="fPassword" onChange={handleChange} />
                <br />
                <label>Confirm password:</label><br />
                <input type="text" name="fConfirmPassword" onChange={handleChange} />
                <br />
                <br />
                <Link to='/login'>Login here ...</Link>
                <br />
                <Button variant="secondary" type="submit">Submit</Button>
            </form>
        </FormBox>
    );
};
export default SignUp;



const FormBox = styled.div`
    width: 100%;

    form {
        padding-top: 70px;
        width: 500px;
        margin: auto;
    }
`;