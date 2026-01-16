import { useContext, createContext } from "react";

import type { IProduct } from "~/interfaces/IProduct";

interface ISortContext {
  applySort: (products: IProduct[]) => IProduct[];
  setActiveSortCategory: (category: string) => void;
  activeSortCategory: string;
}

export const SortContext = createContext<ISortContext | undefined>(undefined);

export const useSort = () => {
  const context = useContext(SortContext);
  if (context === undefined) {
    throw new Error(
      "useSort может быть использован только вместе с SortProvider"
    );
  }

  return context;
};
