import React, { useState } from 'react';
import axios from 'axios';
import './AddProductForm.css';

interface Product {
    id: number;
    name: string;
    stock: number;
    price: number;
    category: string;
}

const GetAllProducts: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    const handleShowAllProducts = async () => {
        try {
            const response = await axios.get('/api/products');
            console.log(response.data);
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
            alert('Failed to fetch products');
        }
    };

    return (
        <div>
            <h1>All Products</h1>
            <div className={"form"}>
            <button onClick={handleShowAllProducts}>Get All Products</button>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <p>Name: {product.name}</p>
                        <p>Stock: {product.stock}</p>
                        <p>Price: {product.price} Euro</p>
                        <p>ID: {product.id}</p>
                        <p>Category: {product.category}</p>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    );
};

export default GetAllProducts;