import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import axios from 'axios';



const SignUp = props => {

    const [info, setInfo] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    function submitForm(e) {
        e.preventDefault();

        axios.post('http://localhost:5000/users/add', info)
            .then(res => console.log(res.data));
    };

    // useEffect(() => {
    //     axios.get('http://localhost:5000/users/')
    //         .then(res => console.log(res.data));
    // });

    console.log('ttt');
    
    return (
        <FormBox>
            {/* <form action="/action_page.php" onSubmit={submitForm}> */}
            <form onSubmit={submitForm}>
                <label>Username:</label><br />
                <input type="text" onChange={e => setInfo({ ...info, username: e.target.value })} />
                <br />
                <label>Email:</label><br />
                <input type="text" onChange={e => setInfo({ ...info, email: e.target.value })} />
                <br />
                <label>Password:</label><br />
                <input type="text" onChange={e => setInfo({ ...info, password: e.target.value })} />
                <br />
                <label>Confirm password:</label><br />
                <input type="text" onChange={e => setInfo({ ...info, confirmPassword: e.target.value })} />
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