import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';




const Product = ({ item }) => {

    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <h1>{item.category}</h1>
                    <Link to={'/' + item.category + '/' + item.branch + '/' + item.id}>{item.branch}</Link>
                    {/* <Link to={'/' + item.category + '/' + item.id}>{item.branch}</Link> */}
                    <h3>{item.name}</h3>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};
export default Product;