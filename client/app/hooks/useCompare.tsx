import { createContext, useContext } from "react";

interface ICompareContext {
	compareItems: Product[];
	addToCompare: (product: Product) => void;
}

interface Product {
	id: number;
	title: string;
	imageSrc: string;
}

export const CompareContext = createContext<ICompareContext | undefined>(undefined)

export const useCompare = () => {
	const context = useContext(CompareContext)
	if (context === undefined) {
		throw new Error("useCompare может быть использован только вместе с CompareProvider")
	}

	return context
}
