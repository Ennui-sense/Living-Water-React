import { createContext, useContext } from "react";
import type { IProduct } from "~/interfaces/IProduct";


interface ICompareContext {
	compareItems: IProduct[];
	addToCompare: (product: IProduct) => void;
}

export const CompareContext = createContext<ICompareContext | undefined>(undefined)

export const useCompare = () => {
	const context = useContext(CompareContext)
	if (context === undefined) {
		throw new Error("useCompare может быть использован только вместе с CompareProvider")
	}

	return context
}
