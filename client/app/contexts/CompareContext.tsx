import React, { useState, useEffect } from "react";
import { CompareContext } from "~/hooks/useCompare";

interface ICompareContext {
  compareItems: Product[];
  addToCompare: (product: Product) => void;
}

interface Product {
  id: number;
  imageSrc: string;
  title: string;
}

export const CompareProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [compareItems, setCompareItems] = useState<Product[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("compare");
      return saved ? JSON.parse(saved) : [];
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("compare", JSON.stringify(compareItems));
  }, [compareItems]);

  const addToCompare = (product: Product) => {
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
