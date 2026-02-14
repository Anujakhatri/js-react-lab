import { it, expect, describe, vi, beforeEach } from 'vitest';
import { Product } from './Product';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import userEvent from '@testing-library/user-event';

vi.mock('axios'); //fake version of axios so we can't connect to backend

describe('Product component', () => {
    let product;
    let refreshCart;
    beforeEach(() => {
        product = {
            id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
            image: "images/products/kitchen-paper-towels-8-pack.jpg",
            name: "2-Ply Kitchen Paper Towels - 8 Pack",
            rating: {
                stars: 4.5,
                count: 1045
            },
            priceCents: 1899,
            keywords: ["kitchen", "kitchen towels", "tissues"]
        };
        refreshCart = vi.fn(); // Reset call count before each test

    });

    it('renders product name correctly', () => {
        render(<Product product={product} refreshCart={refreshCart} />);

        expect(
            screen.getByText("2-Ply Kitchen Paper Towels - 8 Pack")
        ).toBeInTheDocument();

        expect(
            screen.getByTestId('product-image')
        ).toHaveAttribute('src', 'images/products/kitchen-paper-towels-8-pack.jpg');

        expect(
            screen.getByTestId('product-rating-stars')
        ).toHaveAttribute('src', 'images/ratings/rating-45.png');

        expect(
            screen.getByText('1045')
        ).toBeInTheDocument();
    });


    it(' When add to cart button is clicked', async () => {
        axios.post.mockResolvedValue({ data: {} });

        render(<Product product={product} refreshCart={refreshCart} />);

        const user = userEvent.setup();
        const addToCartButton = screen.getByTestId('add-to-cart-button');
        await user.click(addToCartButton);

        expect(axios.post).toHaveBeenCalledWith('/api/cart-items', {
            productId: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
            quantity: 1,
        }
        );
        expect(refreshCart).toHaveBeenCalled();
    });
});