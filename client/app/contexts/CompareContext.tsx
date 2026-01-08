import React, { useState, useEffect } from "react";
import { CompareContext } from "~/hooks/useCompare";
import type { IProduct } from "~/interfaces/IProduct";

interface ICompareContext {
  compareItems: IProduct[];
  addToCompare: (product: IProduct) => void;
}

export const CompareProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [compareItems, setCompareItems] = useState<IProduct[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("compare");
      return saved ? JSON.parse(saved) : [];
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("compare", JSON.stringify(compareItems));
  }, [compareItems]);

  const addToCompare = (product: IProduct) => {
    setCompareItems((prev) => {
      const productInCompare = prev.find((item) => item.id === product.id);

      if (productInCompare) {
        return prev;
      }

      return [...prev, product];
    });
  };

  const value: ICompareContext = {
    compareItems,
    addToCompare,
  };

  return (
    <CompareContext.Provider value={value}>{children}</CompareContext.Provider>
  );
};
