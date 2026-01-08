interface IImageProduct {
	url: string;
}

interface ICharacterProduct {
	label: string;
	value: string;
}

export interface IProduct {
	id: number;
	title: string;
	images: IImageProduct[];
	category: ICharacterProduct;
	source: ICharacterProduct;
	placement: ICharacterProduct;
	type: ICharacterProduct;
	isNew: boolean;
	price: number;
	tankVolume: number;
	width: number;
	height: number;
	depth: number;
}