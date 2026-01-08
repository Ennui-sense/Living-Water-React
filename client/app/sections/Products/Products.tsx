import "./Products.scss";

import qs from "qs";

import Section from "~/layouts/Section/Section";
import ProductsList from "~/components/ProductsList/ProductsList";

import { useState, useEffect } from "react";

import type { IProduct } from "~/interfaces/IProduct";

interface ProductsResponse {
  data: IProduct[];
}

interface ProductsData {
  ProductsData: ProductsResponse;
}

const Products = () => {
  const [data, setData] = useState<ProductsData | null>(null);

  useEffect(() => {
    async function loadData() {
      const BASE_URL =
        import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";
      const path = "/api/products";
      const url = new URL(path, BASE_URL);

      url.search = qs.stringify(
        {
          populate: "*",
        },
        { encodeValuesOnly: true }
      );

      const response = await fetch(url.href);
      const ProductsData = await response.json();

      setData({ ProductsData });
    }

    loadData();
  }, []);

  if (!data) return <p>No data found</p>;

  return (
    <Section sectionName="products" isOther={true}>
      <div className="products__inner">
        <ProductsList products={data.ProductsData.data.slice(0, 6)} gridColumns={3}/>
      </div>
    </Section>
  );
};

export default Products;
