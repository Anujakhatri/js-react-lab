import axios from 'axios';
import { useEffect, useState } from 'react';
import './HomePage.css'
import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';

export function HomePage({ cart, refreshCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getHomeData = async () => {
            const response = await axios.get('/api/products');
            setProducts(response.data);
        }
        getHomeData();
    }, []);

    return (
        <>
            <title>Easy Shopping</title>

            <Header cart={cart} />  {/* parent component of cart */}

            <div className="home-page">
                <ProductsGrid products={products} refreshCart={refreshCart} />
            </div>
        </>
    );
}