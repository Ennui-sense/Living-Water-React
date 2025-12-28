import { ProductsCardsData } from "~/data/ProductsCardsData";
import ProductsCard from "../ProductsCard/ProductsCard";

const ProductsList = () => {
  return (
    <ul className="products__list">
      {ProductsCardsData.map((product) => (
        <li className="products__item" key={product.id}>
          <ProductsCard product={product}></ProductsCard>
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
