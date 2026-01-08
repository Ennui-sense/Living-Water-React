import "./Catalog.scss";

import type { IProduct } from "~/interfaces/IProduct";

import Categories from "~/components/Categories/Categories";
import ProductsList from "~/components/ProductsList/ProductsList";

interface CatalogProps {
  products: IProduct[];
}

const Catalog = ({ products }: CatalogProps) => {
  return (
    <section className="catalog container">
      <div className="catalog__title">
        <h1 className="catalog__title-text">Оборудование</h1>
        <span className="catalog__title-count">/ {products.length} шт.</span>
      </div>

      <h2 className="visually-hidden">Наши товары</h2>

      <div className="catalog__inner">
        <Categories className="catalog__categories" />

        <ProductsList products={products} gridColumns={4} />
      </div>
    </section>
  );
};

export default Catalog;
