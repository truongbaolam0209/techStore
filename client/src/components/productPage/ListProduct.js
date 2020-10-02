import React, { useState } from 'react';
import Product from './Product';
import database from '../database.json';



const ListProduct = props => {

    const [ data, setData ]= useState(database);
    return (
        <div>
            PRINT
            {data.map(item => (
                <Product key={item.id} item={item}/>
            ))}
        </div>
    );
};
export default ListProduct;


