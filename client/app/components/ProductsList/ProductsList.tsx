import clsx from "clsx";
import "../../sections/Products/Products.scss";

import ProductsCard from "../ProductsCard/ProductsCard";

import type { IProduct } from "~/interfaces/IProduct";

interface ProductsListProps {
  products: IProduct[];
  gridColumns: number;
}

const ProductsList = ({ products, gridColumns }: ProductsListProps) => {
  return (
    <ul
      className={clsx("products__list", `products__list--grid-${gridColumns}`)}
    >
      {products.map((product) => (
        <li className="products__item" key={product.id}>
          <ProductsCard product={product}></ProductsCard>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
