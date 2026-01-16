import { useState, type FC, type ReactNode } from "react";
import type { IProduct } from "~/interfaces/IProduct";
import { SortContext } from "~/hooks/useSort";

interface ISortContext {
  applySort: (products: IProduct[]) => IProduct[];
  setActiveSortCategory: (category: string) => void;
  activeSortCategory: string;
}

export const SortProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [activeSortCategory, setActiveSortCategory] = useState<string>("rec");

  const applySort = (products: IProduct[]) => {
    const sortedProducts = [...products];

    switch (activeSortCategory) {
      case "low":
        return sortedProducts.sort((a, b) => a.price - b.price);
      case "high":
        return sortedProducts.sort((a, b) => b.price - a.price);
      case "new":
        return sortedProducts.sort(
          (a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
        );
      case "rec":
      default:
        return sortedProducts;
    }
  };

  const value: ISortContext = {
    applySort,
    setActiveSortCategory,
    activeSortCategory,
  };

  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
};
