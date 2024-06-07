import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fetchProducts, Product } from "./productsData.ts";

const EditProductForm: React.FC = () => {
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        fetchProducts(); // Implement this function to fetch the product data to edit
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (product) {
            setProduct({ ...product, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!product) return;

        try {
            const response = await axios.put(`/api/products/${product.id}`, product);
            alert(`Product ${response.data.name} updated successfully`);
            // Implement any necessary state updates or redirects after successful update
        } catch (error) {
            console.error('Error updating product:', error);
            alert('Failed to update product');
        }
    };

    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label> Name:
                        <input type="text" name="name" value={product?.name || ''} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label> Stock:
                        <input type="text" name="stock" value={product?.stock.toString() || ''} onChange={handleChange} />
                    </label>
                </div>
                <div>
                    <label> Price:
                        <input type="text" name="price" value={product?.price.toString() || ''} onChange={handleChange} />
                    </label>
                </div>
                <button type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default EditProductForm;