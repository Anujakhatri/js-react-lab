import { it, expect, describe, vi, beforeEach } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { HomePage } from './HomePage';

vi.mock('axios');

describe('HomePage Component', () => {
    let refreshCart;

    beforeEach(() => {
        refreshCart = vi.fn();

        // Mock axios.get to return product data
        axios.get.mockResolvedValue({
            data: [
                {
                    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
                    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
                    rating: {
                        stars: 4.5,
                        count: 87
                    },
                    priceCents: 1090,
                    keywords: ["socks", "sports", "apparel"]
                },
                {
                    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    image: "images/products/intermediate-composite-basketball.jpg",
                    name: "Intermediate Size Basketball",
                    rating: {
                        stars: 4,
                        count: 127
                    },
                    priceCents: 2095,
                    keywords: ["sports", "basketballs"]
                }
            ]
        });
    });

    it('displays the products grid correctly', async () => {
        render(
            <MemoryRouter>
                <HomePage cart={[]} refreshCart={refreshCart} />
            </MemoryRouter>
        );
        const productsGrid = await screen.findAllByTestId('product-container');

        expect(productsGrid.length).toBe(2);

        expect(
            within(productsGrid[0])
                .getByText('Black and Gray Athletic Cotton Socks - 6 Pairs')
        ).toBeInTheDocument();
    });
});