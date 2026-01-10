import { createContext, useContext } from "react";
import type { IProduct } from "~/interfaces/IProduct";

interface IFiltersContext {
  filters: string[];
  addFilter: (category: string) => void;
  filteredProducts: IProduct[];
  countProductsOfFilter: (filter: string) => number;
}

export const FiltersContext = createContext<IFiltersContext | undefined>(
  undefined
);

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (context === undefined) {
    throw new Error(
      "useCart может быть использован только вместе с CartProvider"
    );
  }

  return context;
};
