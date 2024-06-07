import axios from 'axios';

export interface Product {
    id: string;
    name: string;
    stock: number;
    price: number;
    category: string;
}

export interface NewProduct {
    name: string;
    stock: number;
    price: number;
    category: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
    const response = await axios.get('/api/products');
    return response.data;
};
