import React, {useState} from 'react';

const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    return(
        <div>

            <form action="http://localhost:8000/api/products/new/" method="post">
                <div>
                    <label for="title">Title:</label>
                    <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label for="price">Price:</label>
                    <input type="text" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <label for="description">Description:</label>
                    <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <input type="submit" value="Go!" />
            </form>
        </div>
    )
}

export default Form;