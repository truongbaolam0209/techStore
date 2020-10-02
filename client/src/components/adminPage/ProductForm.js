import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const ProductForm = props => {

    const [product, setProduct] = useState({
        name: '',
        branch: '',
        category: '',
        price: '',
        description: '',
        count: ''
    });
    const { name, branch, category, price, description, count } = product;
    const handleChange = e => {
        console.log(e.target.name);
        console.log(e.target.value);
        
        setProduct({...product, [e.target.name]: e.target.value});
    };
    const submitForm = (e) => {
        e.preventDefault();
        console.log(name, branch, category, price, description, count);
    };

    return (
        <FormBox>
            <form onSubmit={submitForm}>
                <label>Name:</label><br />
                <input type="text" name="name" onChange={handleChange} />
                <br />

                <label>Branch:</label><br />
                <select id="branch" onChange={handleChange} name="branch">
                    <option value="Samsung">Samsung</option>
                    <option value="Apple">Apple</option>
                    <option value="Sony">Sony</option>
                </select>
                <br />

                <label>Category:</label><br />
                <select id="category" onChange={handleChange} name="category">
                    <option value="Phone">Phone</option>
                    <option value="TV">TV</option>
                    <option value="Kitchen">Kitchen</option>
                </select>
                <br />

                <br />
                <label>Price:</label><br />
                <input type="text" name="price" onChange={handleChange} />
                <br />
                <label>Count:</label><br />
                <input type="text" name="count" onChange={handleChange} />
                <br />
                <label>Description:</label><br />
                <textarea type="text" name="description" onChange={handleChange} />
                <br />
                <br />
                <Button variant="secondary" type="submit">Submit</Button>
            </form>
        </FormBox>
    );
};
export default ProductForm;



const FormBox = styled.div`
    width: 100%;

    form {
        padding-top: 70px;
        width: 500px;
        margin: auto;
    }
`;

