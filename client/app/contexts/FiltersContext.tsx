import React, { useState, useEffect } from "react";
import type { IProduct } from "~/interfaces/IProduct";
import { FiltersContext } from "~/hooks/useFilters";
import qs from "qs";

interface IFiltersContext {
  filters: string[];
  addFilter: (addedFilter: string) => void;
  filteredProducts: IProduct[];
  countProductsOfFilter: (filter: string) => number;
}

interface ProductsResponse {
  data: IProduct[];
}

interface ProductsData {
  ProductsData: ProductsResponse;
}

const getProductCategories = (product: IProduct) => {
  return [
    product.category.value,
    product.placement.value,
    product.source.value,
    product.type.value,
  ];
};

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<string[]>([]);
  const [data, setData] = useState<ProductsData | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
	
	const allProducts = data?.ProductsData?.data || [];

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

  useEffect(() => {
    if (filters.length === 0) {
      setFilteredProducts(allProducts);
      return;
    }

    const filtered = allProducts.filter((product) => {
      const productCategories = getProductCategories(product)

      return productCategories.some((category) => filters.includes(category));
    });

    setFilteredProducts(filtered);
  }, [filters, data]);

  const addFilter = (addedFilter: string) => {
    setFilters((prev) => {
      const filterInList = prev.find((filter) => filter === addedFilter);

      if (filterInList) {
        return prev.filter((filter) => filter !== addedFilter);
      }

      return [...prev, addedFilter];
    });
  };

  const countProductsOfFilter = (filter: string) => {
    return allProducts.filter((product) => {
      const productCategories = getProductCategories(product)

      return productCategories.includes(filter);
    }).length;
  };

  const value: IFiltersContext = {
    filters,
    addFilter,
    filteredProducts,
    countProductsOfFilter,
  };

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};
