import "./Filters.scss";

import FiltersActivateButton from "../FiltersActivateButton/FiltersActivateButton";
import Dropdown from "../Dropdown/Dropdown";

import clsx from "clsx";
import qs from "qs"; 

import { useState, useEffect } from "react";

import { FiltersData } from "~/data/FiltersData";
import type { IProduct } from "~/interfaces/IProduct";

interface ProductsResponse {
  data: IProduct[];
}

interface ProductsData {
  ProductsData: ProductsResponse;
}

const Filters = () => {
  const [activeid, setActiveid] = useState<number | null>(null);
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

  const handleClick = (id: number) => {
    setActiveid(id);
  };


  return (
    <div className="filters">
      <ul className="filters__list">
        {FiltersData.map((filter) => (
          <li className="filters__item" key={filter.id}>
            <FiltersActivateButton
              title={filter.label}
              onClick={() => handleClick(filter.id)}
              className={clsx("filters__activate-button", {
                "filters__activate-button--focus": activeid === filter.id,
              })}
            />
            {activeid === filter.id && (
              <Dropdown
                className="filters__dropdown"
                variants={filter.variants}
								value={filter.value}
								allProducts={data.ProductsData.data}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
