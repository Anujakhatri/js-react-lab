
import { Product } from './Product';


export function ProductsGrid({ products, refreshCart }) {

  return (
    <div className="products-grid">
      {products.map((product) => {

        return (
          <Product key={product.id} product={product} refreshCart={refreshCart} />
        );
      })}
    </div>
  );
}