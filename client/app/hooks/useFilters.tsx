import { createContext, useContext } from "react";
import type { IProduct } from "~/interfaces/IProduct";

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
	ranges: IActiveRanges
  filteredProducts: IProduct[];
  addFilter: (addedCategory: string, addedFilter: string) => void;
  countProductsOfFilter: (filter: string) => number;
	setRange: (category: string, type: "min" | "max", value: number | null) => void
  minMaxCharacteristics: IMinMax;
}

export const FiltersContext = createContext<IFiltersContext | undefined>(
  undefined
);

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (context === undefined) {
    throw new Error(
      "useFilters может быть использован только вместе с FiltersProvider"
    );
  }

  return context;
};
