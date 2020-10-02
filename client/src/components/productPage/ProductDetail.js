import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import database from '../database.json';


const ProductDetail = props => {
    console.log(props);
    
    let item;
    database.map(dt => {
        if (dt.id === props.match.params.id) item = dt;
    });

    return (
        <div>
            PRODUCT DETAIL
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{item.branch}</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">{item.name}</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};
export default ProductDetail;