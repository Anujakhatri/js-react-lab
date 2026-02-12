import formatMoney from '../../utils/money';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './HomePage.css'
import { Header } from '../../components/Header';

export function HomePage({ addToCart, cart, products }) {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     axios.get('/api/products')
    //         .then((response) => {
    //             setProducts(response.data);
    //         });

    // }, []);

    const [quantities, setQuantities] = useState({});

    return (
        <>
            <Header cart={cart} />  {/* parent component of cart */}

            <title>HomePage</title>
            <div className="home-page">
                <div className="products-grid">
                    {products.map((product) => {
                        return (
                            <div key={product.id} className="product-container">
                                <div className="product-image-container">
                                    <img className="product-image"
                                        src={product.image} />
                                </div>

                                <div className="product-name limit-text-to-2-lines">
                                    ${product.name}
                                </div>

                                <div className="product-rating-container">
                                    <img className="product-rating-stars"
                                        src={`images / ratings / rating - ${product.rating.stars * 10}.png`} />  {/* 1 star = 10 rating points */}
                                    <div className="product-rating-count link-primary">
                                        {product.rating.count}
                                    </div>
                                </div>

                                <div className="product-price">
                                    {formatMoney(product.priceCents)}
                                </div>

                                <div className="product-quantity-container">
                                    <select onChange={(e) => setQuantities({ ...quantities, [product.id]: parseInt(e.target.value) })} value={quantities[product.id] || 1}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>

                                <div className="product-spacer"></div>

                                <div className="added-to-cart">
                                    <img src="images/icons/checkmark.png" />
                                    Added
                                </div>

                                <button className="add-to-cart-button button-primary" onClick={() => addToCart(product, quantities[product.id] || 1)}>
                                    Add to Cart
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}