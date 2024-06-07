import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import './AddProductForm.css';
import {Product} from "./productsData.ts";

export default function ProductDetail() {
    const params = useParams();
    const category = params.category;
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [products, setProducts] = useState<Product[]>([]);

    function getProductsByCategory(selectedCategory: string | undefined) {
        axios.get(`/api/products/category/${selectedCategory}`)
            .then(response => {
                setProducts(response.data);
                console.log('Products fetched');
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
                console.log('Failed to fetch products');
            });
    }

    useEffect(() => {
        getProductsByCategory(category);
    }, [category]);

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <section className="container">
            <h1>Products by Category {category}</h1>
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Select a category</option>
                <option value="category1">Fruits</option>
                <option value="category2">Vegetables</option>
            </select>
            <p></p>
            <form>
            <button onClick={() => getProductsByCategory(selectedCategory)}>Get Product by Category</button>
            </form>
            {products.map((product, index) => (
                <div key={index}>
                    <p>Name: <span className="product-info">{product.name}</span></p>
                    <p>Price: <span className="product-info">{product.price}</span></p>
                    <p>Stock: <span className="product-info">{product.stock}</span></p>
                    <p>Category: <span className="product-info">{product.category}</span></p>
                </div>

            ))}
        </section>
    );
}