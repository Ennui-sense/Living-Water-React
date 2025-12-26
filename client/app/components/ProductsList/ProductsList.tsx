import { ProductsCardsData } from "~/data/ProductsCardsData";
import ProductsCard from "../ProductsCard/ProductsCard";

const ProductsList = () => {
  return (
    <ul className="products__list">
      {ProductsCardsData.map((product) => (
        <ProductsCard product={product} key={product.id}></ProductsCard>
      ))}
    </ul>
  );
};

export default ProductsList;
