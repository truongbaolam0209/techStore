import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';






const LogIn = props => {

    const [info, setInfo] = useState({
        email: '',
        password: ''
    });

    function submitForm(e) {
        e.preventDefault();
        console.log(info);
    }

    return (
        <FormBox>
            {/* <form action="/action_page.php" onSubmit={submitForm}> */}
            <form onSubmit={submitForm}>
                <label>Email:</label><br />
                <input type="text" onChange={e => setInfo({ ...info, email: e.target.value })} />
                <br />
                <label>Password:</label><br />
                <input type="text" onChange={e => setInfo({ ...info, password: e.target.value })} />
                <br />
                <br />
                <Link to='/signup'>Already have account? Signup here ...</Link>
                <br />
                <Button variant="secondary" type="submit">Submit</Button>
            </form>
        </FormBox>
    );
};
export default LogIn;





const FormBox = styled.div`
    width: 100%;

    form {
        padding-top: 70px;
        width: 500px;
        margin: auto;
    }
`;