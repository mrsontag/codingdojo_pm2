import React, {useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from '@reach/router';
const List = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8000/api/products/")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err));

    }, [])

    return (
        <div>
            <ul>
                {products.map((item, index) => {
                    return(
                        <li key={index}><Link to={"/detail/"+item._id}>{item.title} - {item.description}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default List;

/**/