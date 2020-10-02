import { Button, Form, Input, Typography } from 'antd';
import Axios from 'axios';
import React, { useState } from 'react';

const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
    { key: 1, value: "Africa" },
    { key: 2, value: "Europe" },
    { key: 3, value: "Asia" },
    { key: 4, value: "North America" },
    { key: 5, value: "South America" },
    { key: 6, value: "Australia" },
    { key: 7, value: "Antarctica" }
];

const UploadPage = (props) => {

    const [titleValue, setTitleValue] = useState('');
    const [descriptionValue, setDescriptionValue] = useState('');
    const [priceValue, setPriceValue] = useState(0);
    const [continentValue, setContinentValue] = useState(1);

    const [Images, setImages] = useState([]);


    const onTitleChange = (event) => setTitleValue(event.currentTarget.value);
    const onDescriptionChange = (event) => setDescriptionValue(event.currentTarget.value);
    const onPriceChange = (event) => setPriceValue(event.currentTarget.value);
    const onContinentsSelectChange = (event) => setContinentValue(event.currentTarget.value);
    
    const updateImages = (newImages) => setImages(newImages);

    const onSubmit = (event) => {
        event.preventDefault();

        if (!titleValue || !descriptionValue || !priceValue || !continentValue || !Images) {
            return alert('fill all the fields first!');
        };

        const variables = {
            // writer: props.user.userData._id,
            title: titleValue,
            description: descriptionValue,
            price: priceValue,
            images: Images,
            continents: continentValue,
        }

        Axios.post('/api/product/uploadProduct', variables).then(response => {
            if (response.data.success) {
                alert('Product Successfully Uploaded');
                props.history.push('/');
            } else alert('Failed to upload Product');
        });
    };

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Upload Travel Product</Title>
            </div>

            <Form onSubmit={onSubmit} >

                {/* DropZone */}
                {/* <FileUpload refreshFunction={updateImages} /> */}

                <br />
                <br />

                <label>Title</label>
                <Input onChange={onTitleChange} value={titleValue} /><br /><br />

                <label>Description</label>
                <TextArea onChange={onDescriptionChange} value={descriptionValue} /><br /><br />

                <label>Price($)</label>
                <Input onChange={onPriceChange} value={priceValue} type="number" /><br /><br />

                <select onChange={onContinentsSelectChange}>
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select><br /><br />

                <Button onClick={onSubmit}>Submit</Button>
            </Form>
        </div>
    );
};
export default UploadPage;