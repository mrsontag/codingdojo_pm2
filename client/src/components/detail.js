import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';

const Detail = props => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err));

    }, [])

    return (
        <div>
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description} </p>
            <Link to="/">Go home!</Link>
        </div>
    )
}

export default Detail;