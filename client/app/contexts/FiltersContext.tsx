import React, { useState, useEffect } from "react";
import type { IProduct } from "~/interfaces/IProduct";
import { FiltersContext } from "~/hooks/useFilters";
import qs from "qs";
import { useSort } from "~/hooks/useSort";

interface IActiveFilters {
  [key: string]: string[];
}

interface IActiveRanges {
  [key: string]: IRange;
}

interface IRange {
  min: number | null;
  max: number | null;
}

interface IMinMax {
  [key: string]: number;
}

interface IFiltersContext {
  filters: IActiveFilters;
  ranges: IActiveRanges;
  filteredProducts: IProduct[];
  addFilter: (addedCategory: string, addedFilter: string) => void;
  countProductsOfFilter: (filter: string) => number;
  setRange: (
    category: string,
    type: "min" | "max",
    value: number | null
  ) => void;
  minMaxCharacteristics: IMinMax;
}

interface ProductsResponse {
  data: IProduct[];
}

interface ProductsData {
  ProductsData: ProductsResponse;
}

const getProductCategories = (product: IProduct): IActiveFilters => {
  return {
    category: [product.category.value],
    placement: [product.placement.value],
    source: [product.source.value],
    type: [product.type.value],
  };
};

export const FiltersProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<IActiveFilters>({});
  const [ranges, setRanges] = useState<IActiveRanges>({
    price: { min: null, max: null },
    tankVolume: { min: null, max: null },
  });
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

	const { applySort, activeSortCategory } = useSort();

  useEffect(() => {
    const activeCategories = Object.keys(filters).filter(
      (key) => filters[key].length > 0
    );

    const filtered = allProducts.filter((product) => {
      const categoryMatch = activeCategories.every((key) => {
        const productValue = (product as any)[key]?.value;
        return filters[key].includes(productValue);
      });

      const priceMin = ranges.price.min ?? -Infinity;
      const priceMax = ranges.price.max ?? Infinity;
      const priceMatch = product.price >= priceMin && product.price <= priceMax;

      const tankMin = ranges.tankVolume.min ?? -Infinity;
      const tankMax = ranges.tankVolume.max ?? Infinity;
      const tankMatch =
        product.tankVolume >= tankMin && product.tankVolume <= tankMax;

      return categoryMatch && priceMatch && tankMatch;
    });

		const sorted = applySort(filtered)

    setFilteredProducts(sorted);
  }, [filters, ranges, data, activeSortCategory]);

  const getMinMax = () => {
    if (allProducts.length === 0)
      return { minPrice: 0, maxPrice: 0, minTankVolume: 0, maxTankVolume: 0 };
    return {
      minPrice: Math.min(...allProducts.map((p) => p.price)),
      maxPrice: Math.max(...allProducts.map((p) => p.price)),
      minTankVolume: Math.min(...allProducts.map((p) => p.tankVolume)),
      maxTankVolume: Math.max(...allProducts.map((p) => p.tankVolume)),
    };
  };

  const addFilter = (addedCategory: string, addedFilter: string) => {
    setFilters((prev) => {
      const currentCategoryFilters = prev[addedCategory] || [];

      if (currentCategoryFilters.includes(addedFilter)) {
        return {
          ...prev,
          [addedCategory]: currentCategoryFilters.filter(
            (filter) => filter !== addedFilter
          ),
        };
      }

      return {
        ...prev,
        [addedCategory]: [...currentCategoryFilters, addedFilter],
      };
    });
  };

  const setRange = (
    category: string,
    type: "min" | "max",
    value: number | null
  ) => {
    setRanges((prev) => ({
      ...prev,
      [category]: { ...prev[category], [type]: value },
    }));
  };

  const countProductsOfFilter = (filter: string) => {
    return filteredProducts.filter((product) => {
      const productCategories = [
        product.category.value,
        product.placement.value,
        product.source.value,
        product.type.value,
      ];

      return productCategories.includes(filter);
    }).length;
  };

  const value: IFiltersContext = {
    filters,
    addFilter,
    filteredProducts,
    countProductsOfFilter,
    setRange,
    ranges,
    minMaxCharacteristics: getMinMax(),
  };

  return (
    <FiltersContext.Provider value={value}>{children}</FiltersContext.Provider>
  );
};
