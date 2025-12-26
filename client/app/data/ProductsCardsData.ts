export interface IProductsCard {
  title: string;
  price: number;
  imageSrc: string;
  imageHoverSrc: string;
  isNew: boolean;
  id: number;
  sizes: {
    height: number;
    width: number;
    depth: number;
  };
}

export const ProductsCardsData: IProductsCard[] = [
  {
    title: "Киоск для продажи артезианской воды Киоск 2000",
    price: 475000,
    imageSrc: "img/products/1.png",
    imageHoverSrc: "img/products-hover/1.jpg",
    isNew: false,
    id: 1,
    sizes: {
      height: 255,
      width: 135,
      depth: 135,
    },
  },
  {
    title: "Аппарат для продажи воды Фрост 300 (2022 год)",
    price: 269000,
    imageSrc: "img/products/2.png",
    imageHoverSrc: "img/products-hover/2.jpg",
    isNew: true,
    id: 2,
    sizes: {
      height: 255,
      width: 135,
      depth: 135,
    },
  },
  {
    title: "Аппарат для продажи воды НаноПодъезд (2022 год)",
    price: 169000,
    imageSrc: "img/products/3.png",
    imageHoverSrc: "img/products-hover/3.jpg",
    isNew: true,
    id: 3,
    sizes: {
      height: 255,
      width: 135,
      depth: 135,
    },
  },
  {
    title: "Модуль розлива для продажи воды Улица (2022 год)",
    price: 115000,
    imageSrc: "img/products/4.png",
    imageHoverSrc: "img/products-hover/4.jpg",
    isNew: true,
    id: 4,
    sizes: {
      height: 255,
      width: 135,
      depth: 135,
    },
  },
  {
    title: "Аппарат для продажи воды Улица Мини 200 (2022 год)",
    price: 150000,
    imageSrc: "img/products/5.png",
    imageHoverSrc: "img/products-hover/5.jpg",
    isNew: false,
    id: 5,
    sizes: {
      height: 255,
      width: 135,
      depth: 135,
    },
  },
  {
    title: "Аппарат для продажи воды Фрост 1200 (2022 год)",
    price: 349000,
    imageSrc: "img/products/6.png",
    imageHoverSrc: "img/products-hover/6.jpg",
    isNew: false,
    id: 6,
    sizes: {
      height: 255,
      width: 135,
      depth: 135,
    },
  },
];
