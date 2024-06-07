import { useState } from 'react';
import axios from 'axios';

const DeleteById = () => {
    const [productId, setProductId] = useState('');

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/products/${productId}`);
            alert('Product deleted successfully');
            setProductId('');
        } catch (error) {
            console.error('Error deleting product:', error);
            alert('\n' + 'Error deleting product');
        }
    };

    return (
        <div>
            <h1>Delete Product</h1>
            <input type="text" placeholder="Product-ID" value={productId} onChange={(e) => setProductId(e.target.value)} />
            <p></p>
            <button onClick={handleDelete}>Delete</button>

        </div>
    );
};

export default DeleteById;