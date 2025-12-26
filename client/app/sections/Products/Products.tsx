import "./Products.scss";

import Section from "~/layouts/Section/Section";
import ProductsList from "~/components/ProductsList/ProductsList";

const Products = () => {
  return (
    <Section sectionName="products" isOther={true}>
      <div className="products__inner">
        <ProductsList />
      </div>
    </Section>
  );
};

export default Products;
